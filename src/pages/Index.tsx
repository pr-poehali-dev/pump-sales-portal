import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-secondary/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center pt-20 pb-16">
            <div className="flex justify-center mb-8">
              <div className="bg-primary/10 p-6 rounded-full">
                <Icon name="Gauge" size={64} className="text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Промышленные насосы
              <span className="text-primary block">для любых задач</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Надежное оборудование и комплектующие для водоснабжения, 
              отопления и промышленных процессов от ведущих производителей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Catalog" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Calculator" size={20} className="mr-2" />
                Расчет системы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>20+ лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Многолетний опыт работы с промышленным насосным оборудованием
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Официальная гарантия на все оборудование и сервисное обслуживание
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Доставка по всей России в кратчайшие сроки с собственного склада
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">О компании</h2>
              <p className="text-xl text-muted-foreground">
                ТехноНасос — ведущий поставщик промышленного насосного оборудования
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Комплексные решения для промышленности
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Широкий ассортимент</h4>
                      <p className="text-muted-foreground">Более 1000 моделей насосов различных типов</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Техническая поддержка</h4>
                      <p className="text-muted-foreground">Консультации по подбору и установке оборудования</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Сервисное обслуживание</h4>
                      <p className="text-muted-foreground">Полный цикл обслуживания и ремонта насосов</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/30 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">Довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-muted-foreground">Выполненных проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground">Техподдержка</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99%</div>
                    <div className="text-muted-foreground">Надежность</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Каталог оборудования</h2>
            <p className="text-xl text-muted-foreground">
              Профессиональные насосы для различных промышленных применений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Droplet" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-center">Центробежные насосы</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  Высокоэффективные центробежные насосы для водоснабжения и циркуляции
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Производительность: до 2000 м³/ч</div>
                  <div>• Напор: до 150 м</div>
                  <div>• Температура: до +120°C</div>
                </div>
                <Button className="mt-4 w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-center">Погружные насосы</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  Надежные погружные насосы для скважин и резервуаров
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Глубина погружения: до 200 м</div>
                  <div>• Диаметр: от 4" до 12"</div>
                  <div>• Мощность: до 200 кВт</div>
                </div>
                <Button className="mt-4 w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Cog" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-center">Винтовые насосы</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  Универсальные винтовые насосы для вязких и агрессивных сред
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Вязкость: до 500,000 сП</div>
                  <div>• Температура: до +200°C</div>
                  <div>• Всасывание: до 9 м</div>
                </div>
                <Button className="mt-4 w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Icon name="Grid3x3" size={20} className="mr-2" />
              Смотреть весь каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для консультации и заказа оборудования
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Наши контакты</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">info@technonasos.ru</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Адрес</div>
                    <div className="text-muted-foreground">
                      г. Москва, ул. Промышленная, д. 15, стр. 2
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Режим работы</div>
                    <div className="text-muted-foreground">
                      Пн-Пт: 9:00-18:00<br />
                      Сб: 10:00-15:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Заказать консультацию</CardTitle>
                <CardDescription>
                  Оставьте заявку и наш специалист свяжется с вами
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" className="text-primary" size={24} />
                <span className="text-lg font-bold text-foreground">ТехноНасос</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Надежное промышленное насосное оборудование для любых задач
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Центробежные насосы</li>
                <li>Погружные насосы</li>
                <li>Винтовые насосы</li>
                <li>Комплектующие</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Техническая поддержка</li>
                <li>Сервисное обслуживание</li>
                <li>Гарантийный ремонт</li>
                <li>Консультации</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@technonasos.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 ТехноНасос. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;