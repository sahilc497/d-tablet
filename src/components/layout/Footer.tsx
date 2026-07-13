export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-10 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-white text-4xl font-playfair tracking-normal lowercase mb-6">d tab</h3>
          <p className="text-sm">The future of learning, note-taking, and academic management.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Products</h4>
          <ul className="space-y-2 text-sm flex flex-col">
            <a href="#" className="hover:text-white transition-colors">Pen Tablet</a>
            <a href="#" className="hover:text-white transition-colors">Pen Display</a>
            <a href="#" className="hover:text-white transition-colors">Accessories</a>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Support</h4>
          <ul className="space-y-2 text-sm flex flex-col">
            <a href="#" className="hover:text-white transition-colors">Driver & Manual</a>
            <a href="#" className="hover:text-white transition-colors">FAQs</a>
            <a href="#" className="hover:text-white transition-colors">Warranty Statement</a>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Subscribe to get the latest updates and offers.</p>
          <div className="flex bg-white/5 rounded-full p-1 border border-white/10 focus-within:border-white/30 transition-colors">
            <input 
              type="email" 
              placeholder="Your Email Address..." 
              className="bg-transparent border-none outline-none px-4 py-2 w-full text-white text-sm"
            />
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs">
        <p>Copyright © 2026 Shenzhen Huion Trend Technology Co., Ltd. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
