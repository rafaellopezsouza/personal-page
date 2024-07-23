// DownloadResume.tsx
import { FaDownload } from 'react-icons/fa';
import filePath from '../../assets/resume/resume.pdf';
import './style.css';
import { useLanguage } from '../../context/LanguageContext';

export function DownloadResume() {
    const { translations } = useLanguage();
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'rafael-lopes-de-souza.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload} className="download-button">
            <FaDownload className="icon-download" />
            <span>{translations.resume.buttonDownloadText}</span>
        </button>
    );
}
