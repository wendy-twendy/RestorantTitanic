import { useLanguage } from '../hooks/use-language';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// SVG flags for countries (simplified versions for better display)
const FlagUK = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="16">
    <clipPath id="a">
      <path d="M0 0v30h60V0z"/>
    </clipPath>
    <clipPath id="b">
      <path d="M30 15h30v15zv15H0zH0V0zV0h30z"/>
    </clipPath>
    <g clipPath="url(#a)">
      <path d="M0 0v30h60V0z" fill="#012169"/>
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
      <path d="M0 0l60 30m0-30L0 30" clipPath="url(#b)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const FlagAlbania = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" width="20" height="16">
    <rect width="700" height="500" fill="#E41E20"/>
    <path d="M424.35,250c0,47.28-38.32,85.6-85.6,85.6c-47.28,0-85.6-38.32-85.6-85.6c0-47.28,38.32-85.6,85.6-85.6C386.03,164.4,424.35,202.72,424.35,250z" fill="#000"/>
    <path d="M396.09,250c0,31.66-25.68,57.33-57.33,57.33c-31.66,0-57.33-25.68-57.33-57.33c0-31.66,25.68-57.33,57.33-57.33C370.41,192.67,396.09,218.34,396.09,250z" fill="#E41E20"/>
    <polygon fill="#000" points="338.76,194.5 338.76,176.14 350.91,176.14 344.84,169.12 356.98,169.12 356.98,157.64 365.46,169.12 377.6,169.12 369.13,176.14 383.68,176.14 364.05,186.58 369.49,194.5 356.59,191.54 352.79,204.74 347.33,191.54 337.41,194.5 344.84,181.3"/>
    <polygon fill="#000" points="338.76,305.5 338.76,323.86 350.91,323.86 344.84,330.88 356.98,330.88 356.98,342.36 365.46,330.88 377.6,330.88 369.13,323.86 383.68,323.86 364.05,313.42 369.49,305.5 356.59,308.46 352.79,295.26 347.33,308.46 337.41,305.5 344.84,318.7"/>
    <polygon fill="#000" points="396.09,250 414.45,250 414.45,262.15 421.47,256.07 421.47,268.22 432.95,268.22 421.47,276.7 421.47,288.85 414.45,280.37 414.45,294.92 403.84,274.89 396.09,280.73 399.05,267.83 385.85,264.03 399.05,258.57 396.09,248.65 409.29,256.07"/>
    <polygon fill="#000" points="285.91,250 267.55,250 267.55,262.15 260.53,256.07 260.53,268.22 249.05,268.22 260.53,276.7 260.53,288.85 267.55,280.37 267.55,294.92 278.16,274.89 285.91,280.73 282.95,267.83 296.15,264.03 282.95,258.57 285.91,248.65 272.71,256.07"/>
  </svg>
);

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-md flex items-center gap-2">
          {language === 'en' ? <FlagUK /> : <FlagAlbania />}
          <span className="hidden sm:inline">{language === 'en' ? 'English' : 'Shqip'}</span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2 w-40">
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')} 
          className={`${language === 'en' ? 'bg-muted' : ''} flex justify-between items-center`}
        >
          <div className="flex items-center gap-2">
            <FlagUK />
            <span>{t('language.en', 'English')}</span>
          </div>
          {language === 'en' && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('sq')} 
          className={`${language === 'sq' ? 'bg-muted' : ''} flex justify-between items-center`}
        >
          <div className="flex items-center gap-2">
            <FlagAlbania />
            <span>{t('language.sq', 'Albanian')}</span>
          </div>
          {language === 'sq' && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}