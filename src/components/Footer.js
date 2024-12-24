// components/Footer.js
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">About</h3>
            <p className="mt-4 text-base text-gray-500">
              Yandere Dark Elf is a thrilling reverse isekai story blending fantasy, romance, and comedy. Follow the adventures of Maribelle and Hinata as their worlds collide!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-base text-gray-500 hover:text-gray-900">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/#articles" className="text-base text-gray-500 hover:text-gray-900">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://aiomodarkelf.deregula.com/"
                  target="_blank"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Official Website
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/nakano_sora/highlights"
                  target="_blank"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="mailto:essipicoc@gmail.com"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Email: essipicoc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Yandere Dark Elf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
