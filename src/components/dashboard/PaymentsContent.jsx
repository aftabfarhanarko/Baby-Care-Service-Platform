"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, Clock, CheckCircle, Plus, Download } from 'lucide-react';

const PaymentsContent = () => {
  const transactions = [
    {
      id: 'TRX-123456',
      service: 'Weekend Babysitting',
      sitter: 'Sarah Wilson',
      date: '2024-03-15',
      amount: 120.00,
      status: 'completed',
      method: 'Visa ending in 4242'
    },
    {
      id: 'TRX-123457',
      service: 'Evening Care',
      sitter: 'Emily Davis',
      date: '2024-03-10',
      amount: 85.50,
      status: 'completed',
      method: 'Mastercard ending in 8899'
    },
    {
      id: 'TRX-123458',
      service: 'Full Day Care',
      sitter: 'Michael Brown',
      date: '2024-03-01',
      amount: 200.00,
      status: 'refunded',
      method: 'Visa ending in 4242'
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'Visa',
      last4: '4242',
      expiry: '12/25',
      isDefault: true
    },
    {
      id: 2,
      type: 'Mastercard',
      last4: '8899',
      expiry: '09/24',
      isDefault: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Payments & Billing</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your payment methods and view transaction history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Methods Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Methods</h2>
              <button className="flex items-center gap-2 text-sm font-medium text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300">
                <Plus className="w-4 h-4" />
                Add New
              </button>
            </div>

            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <CreditCard className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {method.type} ending in {method.last4}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Expires {method.expiry}</p>
                    </div>
                  </div>
                  {method.isDefault && (
                    <span className="px-3 py-1 text-xs font-medium text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-900/20 rounded-full">
                      Default
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Transaction History</h2>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Description</th>
                    <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Date</th>
                    <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Amount</th>
                    <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {transactions.map((trx) => (
                    <tr key={trx.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900 dark:text-white">{trx.service}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{trx.sitter} • {trx.method}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{trx.date}</td>
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">${trx.amount.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          trx.status === 'completed' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400'
                        }`}>
                          {trx.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {trx.status.charAt(0).toUpperCase() + trx.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
            <p className="text-rose-100 text-sm font-medium mb-1">Total Spent (This Month)</p>
            <h3 className="text-3xl font-bold mb-4">$425.50</h3>
            <div className="flex items-center gap-2 text-rose-100 text-sm bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <DollarSign className="w-4 h-4" />
              <span>12% more than last month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Billing Information</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Billing Address</p>
                <p className="font-medium text-gray-900 dark:text-white">123 Maple Street</p>
                <p className="text-gray-900 dark:text-white">New York, NY 10001</p>
              </div>
              <button className="w-full py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Edit Billing Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentsContent;
