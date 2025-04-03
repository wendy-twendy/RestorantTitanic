import { useLanguage } from '../hooks/use-language';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-md flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{language === 'en' ? 'English' : 'Shqip'}</span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2 w-40">
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')} 
          className={`${language === 'en' ? 'bg-muted' : ''} flex justify-between items-center`}
        >
          <span>{t('language.en', 'English')}</span>
          {language === 'en' && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('sq')} 
          className={`${language === 'sq' ? 'bg-muted' : ''} flex justify-between items-center`}
        >
          <span>{t('language.sq', 'Albanian')}</span>
          {language === 'sq' && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}