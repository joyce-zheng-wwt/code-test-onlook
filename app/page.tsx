'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const [user, setUser] = useState(null);
    const [showOrdering, setShowOrdering] = useState(false);

    const promoSlides = [
        { title: '50% OFF First Order', subtitle: 'New customers only', bg: 'bg-red-500' },
        { title: 'Free Delivery', subtitle: 'Orders over $25', bg: 'bg-green-500' },
        { title: 'Taco Tuesday', subtitle: 'Buy 2 Get 1 Free', bg: 'bg-yellow-500' },
    ];

    const menuItems = [
        { id: 1, name: 'Classic Beef Taco', price: 3.99, category: 'Tacos', image: '🌮' },
        { id: 2, name: 'Chicken Quesadilla', price: 8.99, category: 'Quesadillas', image: '🧀' },
        { id: 3, name: 'Carnitas Burrito', price: 11.99, category: 'Burritos', image: '🌯' },
        { id: 4, name: 'Fish Taco', price: 4.99, category: 'Tacos', image: '🐟' },
        { id: 5, name: 'Veggie Bowl', price: 9.99, category: 'Bowls', image: '🥗' },
        { id: 6, name: 'Guacamole & Chips', price: 6.99, category: 'Sides', image: '🥑' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % promoSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const addToCart = (item) => {
        setCart((prev) => {
            const existing = prev.find((cartItem) => cartItem.id === item.id);
            if (existing) {
                return prev.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem,
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleAuth = (type) => {
        // Simulate authentication
        setUser({ name: 'John Doe', email: 'john@example.com' });
        setShowAuth(false);
    };

    return (
        <div className="min-h-screen bg-orange-50" data-oid="ghwu:js">
            {/* Header */}
            <header className="bg-white shadow-lg sticky top-0 z-50" data-oid="_28vh39">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="6svc73_">
                    <div className="flex justify-between items-center py-4" data-oid="tb36a90">
                        <div className="flex items-center space-x-2" data-oid="kfyhfok">
                            <span className="text-3xl" data-oid="u7290f8">
                                🌮
                            </span>
                            <h1 className="text-2xl font-bold text-orange-600" data-oid="d4xx:pa">
                                TacoFiesta
                            </h1>
                        </div>

                        <nav className="hidden md:flex space-x-8" data-oid="0y:2luc">
                            <a
                                href="#home"
                                className="text-gray-700 hover:text-orange-600 transition-colors"
                                data-oid="y6sfwyq"
                            >
                                Home
                            </a>
                            <a
                                href="#menu"
                                className="text-gray-700 hover:text-orange-600 transition-colors"
                                data-oid="c26r3e-"
                            >
                                Menu
                            </a>
                            <a
                                href="#about"
                                className="text-gray-700 hover:text-orange-600 transition-colors"
                                data-oid="e:5y3rr"
                            >
                                About
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-orange-600 transition-colors"
                                data-oid="qryzwgv"
                            >
                                Contact
                            </a>
                        </nav>

                        <div className="flex items-center space-x-4" data-oid="00vf7r6">
                            <button
                                onClick={() => setShowCart(true)}
                                className="relative p-2 text-gray-700 hover:text-orange-600"
                                data-oid="sinmjdq"
                            >
                                🛒
                                {cart.length > 0 && (
                                    <span
                                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                                        data-oid="z8gs_4y"
                                    >
                                        {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                    </span>
                                )}
                            </button>

                            {user ? (
                                <div className="flex items-center space-x-2" data-oid="fyg6r9h">
                                    <span className="text-sm text-gray-700" data-oid="9utccs7">
                                        Hi, {user.name}
                                    </span>
                                    <button
                                        onClick={() => setUser(null)}
                                        className="text-sm text-red-600 hover:text-red-800"
                                        data-oid="rjed54f"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setShowAuth(true)}
                                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                                    data-oid="k_xse0_"
                                >
                                    Sign In
                                </button>
                            )}

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2"
                                data-oid="82un2o."
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Promotional Banner */}
            <div
                className={`${promoSlides[currentSlide].bg} text-white py-4 text-center transition-all duration-500`}
                data-oid="9x-viu2"
            >
                <h2 className="text-xl font-bold" data-oid="31kitw8">
                    {promoSlides[currentSlide].title}
                </h2>
                <p className="text-sm" data-oid="t9rhdii">
                    {promoSlides[currentSlide].subtitle}
                </p>
            </div>

            {/* Hero Section */}
            <section
                id="home"
                className="relative bg-gradient-to-r from-orange-400 to-red-500 text-white py-20"
                data-oid="5jir.:n"
            >
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                    data-oid="l9vuuap"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6" data-oid="wfy.q4e">
                        Authentic Taco Flavors
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" data-oid="jvr0cea">
                        Fresh ingredients, bold flavors, and lightning-fast service. Experience the
                        best tacos in town!
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="zl6r1mt"
                    >
                        <button
                            onClick={() => setShowOrdering(true)}
                            className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                            data-oid=".nsaayp"
                        >
                            Order Now 🚀
                        </button>
                        <button
                            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                            data-oid="jtb-wly"
                        >
                            View Menu
                        </button>
                    </div>
                    <p className="w-[30px] h-[30px]" data-oid="vvfl2un"></p>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 bg-white" data-oid="m0wv_zx">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="02olyhk">
                    <div
                        className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
                        data-oid="wa7562e"
                    >
                        <div className="p-6" data-oid="phiueh1">
                            <div className="text-4xl mb-2" data-oid="-hfm3sh">
                                ⚡
                            </div>
                            <h3 className="text-2xl font-bold text-orange-600" data-oid="le803wz">
                                5 Min
                            </h3>
                            <p className="text-gray-600" data-oid="pe:9suk">
                                Average Prep Time
                            </p>
                        </div>
                        <div className="p-6" data-oid="dyherux">
                            <div className="text-4xl mb-2" data-oid="hnv-nr3">
                                ⭐
                            </div>
                            <h3 className="text-2xl font-bold text-orange-600" data-oid="-aly3o-">
                                4.9/5
                            </h3>
                            <p className="text-gray-600" data-oid="knosbgx">
                                Customer Rating
                            </p>
                        </div>
                        <div className="p-6" data-oid="l1e.n1i">
                            <div className="text-4xl mb-2" data-oid="luq0m9l">
                                🌮
                            </div>
                            <h3 className="text-2xl font-bold text-orange-600" data-oid="n09m7kh">
                                50K+
                            </h3>
                            <p className="text-gray-600" data-oid="zw53g1h">
                                Tacos Served
                            </p>
                        </div>
                        <div className="p-6" data-oid=".kb812v">
                            <div className="text-4xl mb-2" data-oid="9e2ucy6">
                                🚚
                            </div>
                            <h3 className="text-2xl font-bold text-orange-600" data-oid="vezrml0">
                                Free
                            </h3>
                            <p className="text-gray-600" data-oid="dil6v4r">
                                Delivery Over $25
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Preview */}
            <section id="menu" className="py-16 bg-orange-50" data-oid="yg7-q22">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ipm1zj7">
                    <div className="text-center mb-12" data-oid="yhbf:2t">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4" data-oid="2zbgk:-">
                            Our Menu
                        </h2>
                        <p className="text-xl text-gray-600" data-oid="botlo:7">
                            Handcrafted with love, served with speed
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        data-oid="o7-:i6."
                    >
                        {menuItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                data-oid="03b1voh"
                            >
                                <div className="p-6" data-oid="t0nqppb">
                                    <div className="text-4xl mb-4 text-center" data-oid="g8w_bd0">
                                        {item.image}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2" data-oid="csp7apj">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4" data-oid="s.825v2">
                                        {item.category}
                                    </p>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="uo5_:76"
                                    >
                                        <span
                                            className="text-2xl font-bold text-orange-600"
                                            data-oid="2uq7lur"
                                        >
                                            ${item.price}
                                        </span>
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                                            data-oid="23v4ogd"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-white" data-oid="tviyrwq">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="so88n1x">
                    <div className="text-center mb-12" data-oid="gr4ckhn">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4" data-oid="dqfrwwr">
                            Why Choose TacoFiesta?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="p4amknu">
                        <div className="text-center p-6" data-oid="l1837-1">
                            <div className="text-5xl mb-4" data-oid="6646ije">
                                🔥
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid="6bw8wj7">
                                Fresh Daily
                            </h3>
                            <p className="text-gray-600" data-oid="ch5x_yh">
                                All ingredients prepared fresh every morning
                            </p>
                        </div>
                        <div className="text-center p-6" data-oid="t5q6ale">
                            <div className="text-5xl mb-4" data-oid="zrbiadz">
                                📱
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid="owj9rfh">
                                Easy Ordering
                            </h3>
                            <p className="text-gray-600" data-oid=".h7-k:6">
                                Order online, pickup or delivery available
                            </p>
                        </div>
                        <div className="text-center p-6" data-oid="uva.ga8">
                            <div className="text-5xl mb-4" data-oid="cz_hiiz">
                                💳
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid="zs2y8js">
                                Secure Payment
                            </h3>
                            <p className="text-gray-600" data-oid="5ec78k4">
                                Multiple payment options with secure checkout
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12" data-oid="0v1te82">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="dhg:abl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="a:2y-br">
                        <div data-oid="rcb7mne">
                            <div className="flex items-center space-x-2 mb-4" data-oid="uop31eb">
                                <span className="text-2xl" data-oid="j0j-vs4">
                                    🌮
                                </span>
                                <h3 className="text-xl font-bold" data-oid="l1g9ycl">
                                    TacoFiesta
                                </h3>
                            </div>
                            <p className="text-gray-400" data-oid="2ax1_.x">
                                Bringing authentic Mexican flavors to your table since 2020.
                            </p>
                        </div>
                        <div data-oid="f-y1b4_">
                            <h4 className="text-lg font-semibold mb-4" data-oid="xuvuy:y">
                                Quick Links
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid="71vh04k">
                                <li data-oid="9.b_t40">
                                    <a href="#menu" className="hover:text-white" data-oid="9orab3q">
                                        Menu
                                    </a>
                                </li>
                                <li data-oid="7ae_.1g">
                                    <a href="#" className="hover:text-white" data-oid="lb.e4r_">
                                        Locations
                                    </a>
                                </li>
                                <li data-oid="cco3cfd">
                                    <a href="#" className="hover:text-white" data-oid=":nzosy8">
                                        Catering
                                    </a>
                                </li>
                                <li data-oid="7zp0qe3">
                                    <a href="#" className="hover:text-white" data-oid="k6b7tnf">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="ihhlobo">
                            <h4 className="text-lg font-semibold mb-4" data-oid="vraiziy">
                                Contact
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid="otu:9y3">
                                <li data-oid="stra8vd">📞 (555) 123-TACO</li>
                                <li data-oid="1ful2wj">📧 hello@tacofiesta.com</li>
                                <li data-oid="wrwa6.k">📍 123 Flavor St, Food City</li>
                            </ul>
                        </div>
                        <div data-oid="7q9wfc.">
                            <h4 className="text-lg font-semibold mb-4" data-oid=".:b0cve">
                                Hours
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid="4yr55p-">
                                <li data-oid=".hp58rp">Mon-Thu: 11am-10pm</li>
                                <li data-oid="6to1da0">Fri-Sat: 11am-11pm</li>
                                <li data-oid="9ti83lq">Sunday: 12pm-9pm</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
                        data-oid="refw_-i"
                    >
                        <p data-oid="b8:gz32">&copy; 2024 TacoFiesta. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Cart Modal */}
            {showCart && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    data-oid="q.stqg7"
                >
                    <div
                        className="bg-white rounded-lg max-w-md w-full max-h-96 overflow-y-auto"
                        data-oid="66ad7oh"
                    >
                        <div className="p-6" data-oid="a1:qkn1">
                            <div
                                className="flex justify-between items-center mb-4"
                                data-oid=".j27474"
                            >
                                <h3 className="text-xl font-bold" data-oid="ova17tu">
                                    Your Cart
                                </h3>
                                <button
                                    onClick={() => setShowCart(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                    data-oid="qdsuc6_"
                                >
                                    ✕
                                </button>
                            </div>

                            {cart.length === 0 ? (
                                <p className="text-gray-500 text-center py-8" data-oid="3s6_2us">
                                    Your cart is empty
                                </p>
                            ) : (
                                <>
                                    {cart.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex justify-between items-center py-2 border-b"
                                            data-oid=".elcrtm"
                                        >
                                            <div data-oid="upme5fd">
                                                <h4 className="font-semibold" data-oid="1g6kwvo">
                                                    {item.name}
                                                </h4>
                                                <p
                                                    className="text-sm text-gray-600"
                                                    data-oid=".fl9doz"
                                                >
                                                    Qty: {item.quantity}
                                                </p>
                                            </div>
                                            <span className="font-bold" data-oid="fbib4lo">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    ))}
                                    <div className="mt-4 pt-4 border-t" data-oid="y84ozfb">
                                        <div
                                            className="flex justify-between items-center mb-4"
                                            data-oid="8ol7hj_"
                                        >
                                            <span className="text-xl font-bold" data-oid="sv:0bev">
                                                Total: ${getTotalPrice()}
                                            </span>
                                        </div>
                                        <button
                                            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors"
                                            data-oid=".cb:.q9"
                                        >
                                            Checkout
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Auth Modal */}
            {showAuth && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    data-oid="zid6vt5"
                >
                    <div className="bg-white rounded-lg max-w-md w-full" data-oid="gsu2n5y">
                        <div className="p-6" data-oid="5yah6rq">
                            <div
                                className="flex justify-between items-center mb-6"
                                data-oid="tflg478"
                            >
                                <h3 className="text-2xl font-bold" data-oid="l0hotmt">
                                    {isSignIn ? 'Sign In' : 'Sign Up'}
                                </h3>
                                <button
                                    onClick={() => setShowAuth(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                    data-oid="al:s4-q"
                                >
                                    ✕
                                </button>
                            </div>

                            <form className="space-y-4" data-oid="zue8m4-">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                                    data-oid=":v0jgcp"
                                />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                                    data-oid="v2ei8k3"
                                />

                                <button
                                    type="button"
                                    onClick={() => handleAuth('email')}
                                    className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors"
                                    data-oid="og8825m"
                                >
                                    {isSignIn ? 'Sign In' : 'Sign Up'}
                                </button>
                            </form>

                            <div className="mt-6" data-oid="hbbf1p0">
                                <div className="relative" data-oid="2s5i-y9">
                                    <div
                                        className="absolute inset-0 flex items-center"
                                        data-oid="6:ey13u"
                                    >
                                        <div
                                            className="w-full border-t border-gray-300"
                                            data-oid="_9y5ktr"
                                        ></div>
                                    </div>
                                    <div
                                        className="relative flex justify-center text-sm"
                                        data-oid="mx.9jns"
                                    >
                                        <span
                                            className="px-2 bg-white text-gray-500"
                                            data-oid="l5dl2.c"
                                        >
                                            Or continue with
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-3" data-oid=":od9_.1">
                                    <button
                                        onClick={() => handleAuth('google')}
                                        className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                        data-oid="5:rhxi6"
                                    >
                                        <span className="mr-2" data-oid="i96zbhp">
                                            🔍
                                        </span>
                                        Continue with Google
                                    </button>
                                    <button
                                        onClick={() => handleAuth('facebook')}
                                        className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                        data-oid="01r68tc"
                                    >
                                        <span className="mr-2" data-oid="iilmfr-">
                                            📘
                                        </span>
                                        Continue with Facebook
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 text-center" data-oid="2jzgyo7">
                                <button
                                    onClick={() => setIsSignIn(!isSignIn)}
                                    className="text-orange-600 hover:text-orange-700"
                                    data-oid="c2s_7xi"
                                >
                                    {isSignIn
                                        ? "Don't have an account? Sign up"
                                        : 'Already have an account? Sign in'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Quick Order Modal */}
            {showOrdering && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    data-oid="kjab3f9"
                >
                    <div
                        className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto"
                        data-oid="vltlh6u"
                    >
                        <div className="p-6" data-oid="85dfu1h">
                            <div
                                className="flex justify-between items-center mb-6"
                                data-oid="7fpti03"
                            >
                                <h3 className="text-2xl font-bold" data-oid="2b6s19s">
                                    Quick Order
                                </h3>
                                <button
                                    onClick={() => setShowOrdering(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                    data-oid="rh4jqik"
                                >
                                    ✕
                                </button>
                            </div>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                data-oid="18ykwoz"
                            >
                                {menuItems.slice(0, 4).map((item) => (
                                    <div
                                        key={item.id}
                                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                                        data-oid="qxc.-fm"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="1dn6j7u"
                                        >
                                            <span className="text-2xl" data-oid="ogftfny">
                                                {item.image}
                                            </span>
                                            <div className="flex-1" data-oid="gb3-_.5">
                                                <h4 className="font-semibold" data-oid="8jml844">
                                                    {item.name}
                                                </h4>
                                                <p
                                                    className="text-orange-600 font-bold"
                                                    data-oid="f1wstq6"
                                                >
                                                    ${item.price}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700 transition-colors"
                                                data-oid="8xx_5-m"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex justify-between" data-oid="jd8wmgs">
                                <button
                                    onClick={() => setShowOrdering(false)}
                                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                    data-oid="jrs76ta"
                                >
                                    View Full Menu
                                </button>
                                <button
                                    onClick={() => {
                                        setShowOrdering(false);
                                        setShowCart(true);
                                    }}
                                    className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                                    data-oid="6xu-9-y"
                                >
                                    View Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
