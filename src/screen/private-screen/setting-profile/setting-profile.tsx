import React from 'react'

const SettingProfile = () => {
  return (
    <div>
    <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <main className="p-6">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-900">Dashboard Settings</h1>
                                <p className="text-sm text-gray-500 mt-1">Configure your account and workspace preferences</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-2 rounded-md text-sm bg-gray-100 text-gray-700" disabled>Discard</button>
                                <button className="px-3 py-2 rounded-md text-sm bg-blue-600 text-white" disabled>Save changes</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Account */}
                            <section className="lg:col-span-2 bg-white p-5 rounded-md border border-gray-100">
                                <h2 className="text-lg font-medium text-gray-800 mb-4">Account</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-1">Full name</label>
                                        <input className="w-full px-3 py-2 rounded-md border bg-white border-gray-200 text-sm" placeholder="Jane Doe" disabled />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-1">Email address</label>
                                        <input className="w-full px-3 py-2 rounded-md border bg-white border-gray-200 text-sm" placeholder="jane@example.com" disabled />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-1">Username</label>
                                        <div className="flex items-center space-x-2">
                                            <input className="flex-1 px-3 py-2 rounded-md border bg-white border-gray-200 text-sm" placeholder="janedoe" disabled />
                                            <button className="px-3 py-2 rounded-md text-sm bg-gray-100" disabled>Change</button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Preferences */}
                            <section className="bg-white p-5 rounded-md border border-gray-100">
                                <h2 className="text-lg font-medium text-gray-800 mb-4">Preferences</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-1">Language</label>
                                        <select className="w-full px-3 py-2 rounded-md border bg-white border-gray-200 text-sm" disabled>
                                            <option>English</option>
                                            <option>Spanish</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-1">Theme</label>
                                        <div className="flex items-center space-x-2">
                                            <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-sm" disabled>System</button>
                                            <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-sm" disabled>Light</button>
                                            <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-sm" disabled>Dark</button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="flex items-center justify-between px-3 py-2 border rounded-md bg-white border-gray-200">
                                            <span className="text-sm text-gray-700">Compact layout</span>
                                            <input type="checkbox" disabled />
                                        </label>
                                    </div>
                                </div>
                            </section>

                            {/* Notifications - full width */}
                            <section className="lg:col-span-3 bg-white p-5 rounded-md border border-gray-100">
                                <h2 className="text-lg font-medium text-gray-800 mb-4">Notifications</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className="flex flex-col p-3 rounded-md border bg-gray-50 border-gray-100">
                                        <span className="text-sm font-medium text-gray-700 mb-2">Email</span>
                                        <span className="text-sm text-gray-500 mb-3">Receive updates and announcements</span>
                                        <input type="checkbox" disabled />
                                    </label>
                                    <label className="flex flex-col p-3 rounded-md border bg-gray-50 border-gray-100">
                                        <span className="text-sm font-medium text-gray-700 mb-2">Mobile</span>
                                        <span className="text-sm text-gray-500 mb-3">SMS alerts and verification</span>
                                        <input type="checkbox" disabled />
                                    </label>
                                    <label className="flex flex-col p-3 rounded-md border bg-gray-50 border-gray-100">
                                        <span className="text-sm font-medium text-gray-700 mb-2">Product</span>
                                        <span className="text-sm text-gray-500 mb-3">Feature updates and tips</span>
                                        <input type="checkbox" disabled />
                                    </label>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SettingProfile
