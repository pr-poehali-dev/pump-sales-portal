import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface PumpProduct {
  id: string;
  name: string;
  type: 'centrifugal' | 'submersible' | 'screw';
  image: string;
  price: string;
  performance: string;
  head: string;
  power: string;
  temperature: string;
  description: string;
  features: string[];
  inStock: boolean;
}

const pumpProducts: PumpProduct[] = [
  {
    id: '1',
    name: 'CNP NB 125-200',
    type: 'centrifugal',
    image: '/img/930155e9-26fb-4f33-9280-59660847eb68.jpg',
    price: 'от 85 000 ₽',
    performance: '200 м³/ч',
    head: '50 м',
    power: '22 кВт',
    temperature: 'до +80°C',
    description: 'Высокоэффективный центробежный насос для водоснабжения и циркуляционных систем',
    features: ['Нержавеющий корпус', 'Механическое уплотнение', 'Низкий уровень шума'],
    inStock: true
  },
  {
    id: '2',
    name: 'Grundfos SP 60-7',
    type: 'submersible',
    image: '/img/21d00348-98e4-4bcb-83c7-e637eebb9591.jpg',
    price: 'от 120 000 ₽',
    performance: '60 м³/ч',
    head: '140 м',
    power: '18.5 кВт',
    temperature: 'до +90°C',
    description: 'Погружной многоступенчатый насос для глубоких скважин',
    features: ['Диаметр 6"', 'Встроенная защита двигателя', 'Коррозионностойкий'],
    inStock: true
  },
  {
    id: '3',
    name: 'Leistritz L4NG 089',
    type: 'screw',
    image: '/img/ed28792b-eb75-4f32-af67-21c6eadff458.jpg',
    price: 'от 450 000 ₽',
    performance: '45 м³/ч',
    head: '12 бар',
    power: '37 кВт',
    temperature: 'до +200°C',
    description: 'Трехвинтовой насос для перекачки вязких и агрессивных жидкостей',
    features: ['Винты с покрытием', 'Самовсасывание', 'Регулируемая скорость'],
    inStock: false
  },
  {
    id: '4',
    name: 'Wilo VeroLine IPL 80/170-5.5/2',
    type: 'centrifugal',
    image: '/img/930155e9-26fb-4f33-9280-59660847eb68.jpg',
    price: 'от 95 000 ₽',
    performance: '170 м³/ч',
    head: '55 м',
    power: '30 кВт',
    temperature: 'до +120°C',
    description: 'Одноступенчатый центробежный насос с торцевым всасыванием',
    features: ['Чугунный корпус', 'Бронзовое рабочее колесо', 'Сменные уплотнения'],
    inStock: true
  },
  {
    id: '5',
    name: 'Grundfos SP 95-3',
    type: 'submersible',
    image: '/img/21d00348-98e4-4bcb-83c7-e637eebb9591.jpg',
    price: 'от 180 000 ₽',
    performance: '95 м³/ч',
    head: '85 м',
    power: '25 кВт',
    temperature: 'до +90°C',
    description: 'Высокопроизводительный погружной насос для промышленного водоснабжения',
    features: ['Диаметр 8"', 'Частотное регулирование', 'Высокий КПД'],
    inStock: true
  },
  {
    id: '6',
    name: 'Allweiler SNF 280 R46',
    type: 'screw',
    image: '/img/ed28792b-eb75-4f32-af67-21c6eadff458.jpg',
    price: 'от 380 000 ₽',
    performance: '280 м³/ч',
    head: '6 бар',
    power: '75 кВт',
    temperature: 'до +150°C',
    description: 'Двухвинтовой насос для нефтехимической промышленности',
    features: ['Взрывозащищенное исполнение', 'Подогрев корпуса', 'CIP мойка'],
    inStock: true
  }
];

const Catalog = () => {
  const [filteredProducts, setFilteredProducts] = useState(pumpProducts);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const handleFilter = (type: string, search: string, sort: string) => {
    let filtered = [...pumpProducts];

    if (type !== 'all') {
      filtered = filtered.filter(product => product.type === type);
    }

    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'price') return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
      return 0;
    });

    setFilteredProducts(filtered);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    handleFilter(type, searchTerm, sortBy);
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    handleFilter(selectedType, search, sortBy);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    handleFilter(selectedType, searchTerm, sort);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'centrifugal': return 'Droplet';
      case 'submersible': return 'Zap';
      case 'screw': return 'Cog';
      default: return 'Package';
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case 'centrifugal': return 'Центробежный';
      case 'submersible': return 'Погружной';
      case 'screw': return 'Винтовой';
      default: return 'Насос';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Каталог насосов
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональное насосное оборудование для промышленных и коммерческих объектов
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Filter" size={20} className="mr-2" />
                  Фильтры и поиск
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Тип насоса
                    </label>
                    <Select value={selectedType} onValueChange={handleTypeChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все типы</SelectItem>
                        <SelectItem value="centrifugal">Центробежные</SelectItem>
                        <SelectItem value="submersible">Погружные</SelectItem>
                        <SelectItem value="screw">Винтовые</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Поиск
                    </label>
                    <Input
                      placeholder="Поиск по названию или описанию"
                      value={searchTerm}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Сортировка
                    </label>
                    <Select value={sortBy} onValueChange={handleSortChange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">По названию</SelectItem>
                        <SelectItem value="price">По цене</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Counter */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Найдено товаров: <span className="font-semibold text-foreground">{filteredProducts.length}</span>
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={product.inStock ? 'default' : 'secondary'} className="bg-primary text-primary-foreground">
                      <Icon name={getTypeIcon(product.type)} size={14} className="mr-1" />
                      {getTypeName(product.type)}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={product.inStock ? 'default' : 'destructive'}>
                      {product.inStock ? 'В наличии' : 'Под заказ'}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technical Specs */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <div className="font-medium text-foreground">Производительность</div>
                      <div className="text-primary font-semibold">{product.performance}</div>
                    </div>
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <div className="font-medium text-foreground">Напор</div>
                      <div className="text-primary font-semibold">{product.head}</div>
                    </div>
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <div className="font-medium text-foreground">Мощность</div>
                      <div className="text-primary font-semibold">{product.power}</div>
                    </div>
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <div className="font-medium text-foreground">Температура</div>
                      <div className="text-primary font-semibold">{product.temperature}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <div className="font-medium text-foreground mb-2">Особенности:</div>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-primary">
                        {product.price}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        В корзину
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Heart" size={16} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Eye" size={16} />
                      </Button>
                    </div>

                    <Button variant="ghost" className="w-full mt-2 text-sm">
                      <Icon name="FileText" size={14} className="mr-2" />
                      Техническая документация
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Товары не найдены
              </h3>
              <p className="text-muted-foreground">
                Попробуйте изменить параметры поиска или фильтры
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16">
            <Card className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
              <CardContent className="py-12">
                <Icon name="Headphones" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Нужна помощь в выборе?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Наши технические специалисты помогут подобрать оптимальное решение 
                  для ваших задач и проведут расчет системы
                </p>
                <div className="flex justify-center">
                  <Button size="lg">+7 933 550-29-38</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;