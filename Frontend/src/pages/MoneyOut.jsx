import React, { useEffect, useState } from "react";
import { addMoneyOut, fetchSuppliers, fetchExpense } from "../services/api";

const CATEGORIES = ["Rent", "Salary", "Electricity", "Purchase", "Other"];
const PAYMENT_MODES = ["Cash", "Bank", "UPI"];

const MoneyOut = () => {
  const [form, setForm] = useState({
    supplierId: "",
    paidTo: "",
    amount: "",
    paymentMode: "Cash",
    category: "",
    note: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchSuppliers()
      .then((data) => setSuppliers(Array.isArray(data) ? data : []))
      .catch(() => setSuppliers([]));
    refreshTransactions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "supplierId") {
      const selected = suppliers.find((s) => s.id === value);
      setForm((prev) => ({
        ...prev,
        supplierId: value,
        paidTo: selected?.name || "",
        note: prev.note,
      }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const refreshTransactions = () => {
    fetchExpense()
      .then((data) => setTransactions(Array.isArray(data) ? data : []))
      .catch(() => setTransactions([]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    try {
      await addMoneyOut({
        paidTo: suppliers.find((s) => s.id === form.supplierId)?.name || "",
        supplierId: form.supplierId || null,
        amount: Number(form.amount || 0),
        paymentMode: form.paymentMode,
        category: form.category,
        note: form.note,
      });
      setStatus("Expense saved.");
      setForm({
        supplierId: "",
        paidTo: "",
        amount: "",
        paymentMode: "Cash",
        category: "",
        note: "",
      });
      refreshTransactions();
    } catch (err) {
      setStatus(err.message || "Could not save");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page money-out-page">
      <h2>Money Out</h2>
      <form className="form card" onSubmit={handleSubmit}>
        <label htmlFor="supplierId">Paid To</label>
        <select
          id="supplierId"
          name="supplierId"
          value={form.supplierId}
          onChange={handleChange}
        >
          <option value="">Select a supplier</option>
          {suppliers.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          placeholder="0.00"
          value={form.amount}
          onChange={handleChange}
        />

        <label htmlFor="paymentMode">Payment Mode</label>
        <select
          id="paymentMode"
          name="paymentMode"
          value={form.paymentMode}
          onChange={handleChange}
        >
          {PAYMENT_MODES.map((mode) => (
            <option key={mode} value={mode}>
              {mode}
            </option>
          ))}
        </select>

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label htmlFor="note">Note (optional)</label>
        <input
          id="note"
          name="note"
          type="text"
          placeholder="Optional"
          value={form.note}
          onChange={handleChange}
        />

        {status && <div className="form-status">{status}</div>}

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Money Out"}
        </button>
      </form>

      <div className="card">
        <h3>Money Out Transactions</h3>
        <div className="table">
          <div className="table-row table-head">
            <div>Date</div>
            <div>Paid To</div>
            <div>Amount</div>
            <div>Mode</div>
            <div>Category</div>
          </div>
          {transactions.length === 0 && (
            <div className="table-row">
              <div className="muted">No transactions yet.</div>
            </div>
          )}
          {transactions.map((t, idx) => (
            <div key={t.id || idx} className="table-row">
              <div>{t.createdAt ? new Date(t.createdAt).toLocaleDateString() : "-"}</div>
              <div>{t.paidTo || "Expense"}</div>
              <div>₹{Number(t.amount || 0).toLocaleString()}</div>
              <div>{t.paymentMode || "-"}</div>
              <div>{t.category || "-"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoneyOut;
