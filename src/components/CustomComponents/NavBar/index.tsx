import NavBarLink from '../../StandardComponents/Links/NavBarLink';

const NavBar = () => {
  return (
    <>
      <nav className='bg-stone-700 h-16'>
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <NavBarLink href='/'>
              Главная
            </NavBarLink>
            <NavBarLink href='/'>
              Задание и помощь
            </NavBarLink>
            <NavBarLink href='/'>
              Примеры
            </NavBarLink>
            <NavBarLink href='/login'>
              Войти
            </NavBarLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;