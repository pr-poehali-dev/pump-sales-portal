import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <Icon name="Wrench" className="text-primary" size={28} />
            <span className="text-xl font-bold text-foreground">Далас</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Главная
            </a>
            <a
              href="/#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              О компании
            </a>
            <a
              href="/catalog"
              className="text-foreground hover:text-primary transition-colors"
            >
              Каталог
            </a>
            <a
              href="/#contacts"
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button>+7 933 550-29-38</Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-4">
              <a
                href="/"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Главная
              </a>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-foreground hover:text-primary transition-colors"
              >
                О компании
              </button>
              <a
                href="/catalog"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Каталог
              </a>
              <button
                onClick={() => scrollToSection('contacts')}
                className="block text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
              <Button className="w-full">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;