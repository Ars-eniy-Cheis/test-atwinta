import { useRouter } from 'next/router'


import { logo } from '../assets/images';

import Image from 'next/image';
import BlueButton from '../components/StandardComponents/Buttons/BlueButton';
import OrderedList from '../components/StandardComponents/OrderedList';
import ListItem from '../components/StandardComponents/ListItem';
import TextLink from '../components/StandardComponents/Links/TextLink';

const Home = (): JSX.Element => {
    let router = useRouter();
    return (
        <div className='mx-auto max-w-5xl'>
            <center>
                <Image className='mb-7' src={logo} width="300" height="300" alt='logo' />
                <text className='text-xl mb-7'>
                    Тестовое задание
                </text>
            </center>
            <OrderedList>
                <ListItem>
                    Для прохождения тестового задания вам необходимо авторизоваться на сервисе.
                </ListItem>
                <ListItem>
                    После подтверждения регистрации, требования к заданию, само задание и советы по его выполнению вы найдете в разделе <TextLink>справка</TextLink>
                </ListItem>
                <ListItem>
                    О завершении работы вы можете уведомить нас через личный кабинет, либо отправив письмо по адресу <TextLink href='mailto:exam@atwinta.ru'>exam@atwinta.ru.</TextLink>
                </ListItem>
                <ListItem>
                    Не забудьте сохранить ссылку на github проекта в <TextLink>профиле</TextLink>
                </ListItem>
            </OrderedList>
            <center>
                <BlueButton onClick={() => { router.push('/register') }}>
                    Зарегестрироваться
                </BlueButton>
            </center>
        </div>
    );
};

export default Home;