const App = () => {
  return (
    <div className="h-screen bg-slate-500">
      <Header />
      <section>
        <div className="container mx-auto flex flex-row">
          <div className="header_buttons">
            <button>винная карта</button>
            <button>дегустация</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex flex-row justify-between py-5">
        <div>Новокузнечный переулок 4/1</div>

        <div>8 (812) 123-45-67</div>
      </div>
      <Nav />
    </header>
  );
};

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between border-y-[1px] border-white text-center">
      <div className="grow border-r-[1px]">Каталог</div>
      <div className="grow border-r-[1px]">Доставка</div>
      <div className="grow border-r-[1px]">Коллекции</div>
      <div className="grow">Контакты</div>
    </nav>
  );
};
export default App;
