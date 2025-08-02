
const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#222]">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">تسجيل الدخول</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">البريد الإلكتروني</label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">كلمة المرور</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        تسجيل الدخول
                    </button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-600">
                    <p className="mb-1 cursor-pointer hover:underline">هل نسيت كلمة المرور؟</p>
                    <p className="cursor-pointer hover:underline">ليس لديك حساب؟ <span className="text-blue-600">سجل الآن</span></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
