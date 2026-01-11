import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const sponsorData = {
    name: "Якупов Халит Джафарович",
    sponsorAmount: 100000,
    earnedPercent: 5,
    tasksCompleted: 1
  };

  const earned = sponsorData.sponsorAmount * (sponsorData.earnedPercent / 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a1a2e]">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Sponsorship
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-32 pb-20 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              О нас
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary via-accent to-secondary rounded-full"></div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p>
                Мы — современная платформа спонсорской поддержки, которая объединяет благотворителей 
                и тех, кто стремится развиваться через выполнение полезных заданий.
              </p>
              <p>
                Наша миссия — создать прозрачную систему взаимовыгодного сотрудничества, где каждый 
                участник получает реальную пользу от своего вклада.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-primary/20">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <Icon name="Shield" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl">Прозрачность</h3>
                  <p className="text-sm text-muted-foreground">Все операции видны и понятны</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-3">
                    <Icon name="Target" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl">Эффективность</h3>
                  <p className="text-sm text-muted-foreground">Быстрая обработка заданий</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-3">
                    <Icon name="Users" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl">Сообщество</h3>
                  <p className="text-sm text-muted-foreground">Взаимная поддержка участников</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Контакты
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-secondary via-primary to-accent rounded-full"></div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 animate-scale-in">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1 animate-gradient bg-[length:200%_200%]">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <Icon name="UserCircle" size={64} className="text-primary" />
                  </div>
                </div>
                <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white border-0 px-4 py-1">
                  Спонсор
                </Badge>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-2">{sponsorData.name}</h3>
                <p className="text-muted-foreground text-lg">Активный спонсор проекта</p>
              </div>

              <div className="w-full max-w-md space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Сумма спонсорства</span>
                    <Icon name="DollarSign" size={20} className="text-primary" />
                  </div>
                  <p className="text-3xl font-bold">
                    {sponsorData.sponsorAmount.toLocaleString('ru-RU')} ₽
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/10 border border-secondary/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Выполнено заданий</span>
                    <Icon name="CheckCircle" size={20} className="text-secondary" />
                  </div>
                  <p className="text-3xl font-bold">
                    {sponsorData.tasksCompleted}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/10 border border-accent/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Процент выплаты</span>
                    <Icon name="Percent" size={20} className="text-accent" />
                  </div>
                  <p className="text-3xl font-bold">
                    {sponsorData.earnedPercent}%
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary animate-gradient bg-[length:200%_200%]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/90 font-semibold">Заработано</span>
                    <Icon name="TrendingUp" size={20} className="text-white" />
                  </div>
                  <p className="text-4xl font-bold text-white">
                    {earned.toLocaleString('ru-RU')} ₽
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    От суммы спонсорства
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
                  Связаться
                </button>
                <button className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all hover:scale-105">
                  Подробнее
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 border-t border-primary/20 backdrop-blur-sm bg-background/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 Sponsorship Platform. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
