const Footer = () => {
    return (
        <footer className="py-4 px-8 bg-gray-800 border-t border-gray-700 text-gray-400 text-sm text-center">
            <p>© {new Date().getFullYear()} Diary App. All rights reserved.</p>
        </footer>
    );
};

export default Footer;