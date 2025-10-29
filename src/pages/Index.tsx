import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const packages = [
    {
      name: "Базовый",
      time: "1 час",
      price: "от 17 000 ₽",
      features: [
        "Аренда с оператором",
        "Базовое сопровождение",
        "Доставка включена",
        "Идеально для фотосессий"
      ],
      popular: false
    },
    {
      name: "Оптимальный",
      time: "2 часа",
      price: "от 27 000 ₽",
      features: [
        "Аренда с оператором",
        "Расширенное сопровождение",
        "Доставка включена",
        "Интерактивные демонстрации",
        "Брендирование (по запросу)"
      ],
      popular: true
    },
    {
      name: "Расширенный",
      time: "4 часа",
      price: "от 40 000 ₽",
      features: [
        "Полный день с перерывами",
        "Индивидуальные сценарии",
        "Премиум сопровождение",
        "Доставка включена",
        "Брендирование включено",
        "Фото и видео контент"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: "PartyPopper",
      title: "Праздничные мероприятия",
      description: "Дни рождения, свадьбы, юбилеи — робособака станет яркой развлекательной частью программы"
    },
    {
      icon: "Building2",
      title: "Корпоративные события",
      description: "Тимбилдинги, презентации, выставки — поднимает статус события и вызывает интерес"
    },
    {
      icon: "ShoppingBag",
      title: "Промо-акции",
      description: "Торговые центры, выставочные стенды, презентации продуктов с интерактивным элементом"
    },
    {
      icon: "Video",
      title: "Медиа и съемки",
      description: "Видеосъемки, тематические шоу, создание уникального контента для блогеров"
    },
    {
      icon: "GraduationCap",
      title: "Образовательные мероприятия",
      description: "Выставки науки и техники, мастер-классы, интерактивные зоны для детей и взрослых"
    },
    {
      icon: "Camera",
      title: "Кино и реклама",
      description: "Создание оригинального контента с роботизированным персонажем для съемок"
    }
  ];

  const features = [
    {
      icon: "Cpu",
      title: "Высокотехнологичный робот",
      description: "Unitree Go2 Air — один из самых продвинутых роботов-квадрупедов в мире"
    },
    {
      icon: "Battery",
      title: "До 2 часов работы",
      description: "Возможность повторной подзарядки для продления времени на мероприятии"
    },
    {
      icon: "Users",
      title: "Опытный оператор",
      description: "Профессиональное сопровождение и управление роботом на протяжении всего события"
    },
    {
      icon: "Sparkles",
      title: "Брендирование",
      description: "Возможность кастомизации и разработки индивидуального сценария выступления"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
        }}
      />

      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Bot" className="text-white" size={24} />
              </div>
              <span className="text-xl font-heading font-bold">МэйбиКод</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm hover:text-primary transition-colors">О роботе</a>
              <a href="#packages" className="text-sm hover:text-primary transition-colors">Цены</a>
              <a href="#cases" className="text-sm hover:text-primary transition-colors">Применение</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                🤖 Технологии будущего
              </Badge>
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                Аренда робособаки
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Unitree Go2 Air
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Сделайте ваше мероприятие незабываемым с высокотехнологичной робособакой. 
                Идеально для праздников, корпоративов, промо-акций и съемок.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть видео
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">2+ часа</div>
                  <div className="text-sm text-muted-foreground">Время работы</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">WOW-эффект</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Мероприятий</div>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-glow" />
              <img 
                src="https://cdn.poehali.dev/projects/d9f7c694-b8cf-4993-a895-50270752ab36/files/f21a9d45-e5bd-4757-8ca2-bc7ae32f4250.jpg"
                alt="Unitree Go2 Robot Dog"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-4">
              Возможности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              О робособаке Unitree Go2
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Высокотехнологичный робот-квадрупед с впечатляющими возможностями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
              Пакеты аренды
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Выберите свой пакет
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Гибкие условия аренды для любого типа мероприятия
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`p-8 relative bg-card/50 backdrop-blur-sm border-border/50 hover:scale-105 transition-all animate-fade-in ${
                  pkg.popular ? 'border-primary shadow-2xl shadow-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                    Популярный
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{pkg.time}</div>
                  <div className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {pkg.price}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  Выбрать пакет
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              Сферы применения
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Где используется робот
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Широкий спектр применения для различных типов мероприятий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={useCase.icon} className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/d9f7c694-b8cf-4993-a895-50270752ab36/files/4398d852-9a8b-4967-9306-ddbd03ae96b9.jpg"
                alt="Robot at corporate event"
                className="rounded-xl shadow-lg hover:scale-105 transition-transform"
              />
              <img 
                src="https://cdn.poehali.dev/projects/d9f7c694-b8cf-4993-a895-50270752ab36/files/94b35fe5-3361-4920-9a34-09c5ae3f33b7.jpg"
                alt="Robot at party"
                className="rounded-xl shadow-lg hover:scale-105 transition-transform mt-8"
              />
            </div>

            <div className="space-y-6">
              <Badge className="bg-accent/20 text-accent border-accent/30">
                Преимущества
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Почему выбирают нас
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Профессиональное сопровождение</h3>
                    <p className="text-sm text-muted-foreground">Опытный оператор обеспечит безупречную работу робота</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Индивидуальный подход</h3>
                    <p className="text-sm text-muted-foreground">Разработаем уникальный сценарий под ваше мероприятие</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Гарантия WOW-эффекта</h3>
                    <p className="text-sm text-muted-foreground">Робот привлечет внимание и запомнится надолго</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm border-border/50">
            <div className="text-center mb-8">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Свяжитесь с нами
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Забронировать робота
              </h2>
              <p className="text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем мероприятии..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-background/50 min-h-32"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Bot" className="text-white" size={24} />
                </div>
                <span className="text-xl font-heading font-bold">МэйбиКод</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Аренда высокотехнологичной робособаки Unitree Go2 для любых мероприятий
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@maybecode.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Информация</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Минимальный заказ: 1 час</div>
                <div>Авансовый платеж: 30%</div>
                <div>Время работы: до 2 часов</div>
                <div>Возможность продления</div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 МэйбиКод. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
