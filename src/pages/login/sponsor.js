import { LoginForm } from "../../components/dashboard/sponsorLogin";
import Head from "next/head";
import MKBox from "../../components/@mui-components/box";
import NextLink from "next/link";
import { Logo } from "../../components/logo";
import {Card, Container, alpha, CardActions, CardHeader} from "@mui/material";
import MKTypography from "../../components/@mui-components/typography";
import { appName } from "../../utils/constants";
import { GuestGuard } from "../../hocs/guest-guard";
import LoginLottie from "../../components/lottie-files/login-lottie";


const LoginPage = () => {
    return(
        <>
            <Head>
                <title>Login | {appName}</title>
            </Head>
            <MKBox
                component="main"
                sx={{
                    backgroundColor: "background.default",
                    //backgroundImage: 'url(../static/background1.png)',
                    backgroundSize: 'cover',
                    //background:'linear-gradient(25deg,#0075c9,#4188e7 20%,#25c1ed 90%)',
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <Container
                    maxWidth="sm"
                    sx={{
                        py: {
                            xs: "40px",
                            md: "40px",
                        },
                        opacity: 0.9
                    }}
                >
                    <Card elevation={16}>
                        <MKBox sx={{
                            display:'flex',
                            minHeight: "88vh",

                        }}>
                            <MKBox sx={{
                                flex: {lg:2, md:1.5, sm: 0},
                                display: {md:'flex', xs:'none'},
                                backgroundColor: theme => alpha(theme.palette.primary.main ,1),
                                //background:'linear-gradient(25deg,#0075c9,#4188e7 20%,#25c1ed 90%)',
                                borderRadius: '15px 0 0 15px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}>

                                {/* <MKTypography variant={'h5'} color={'light'}>
                                    {'FCB Admin Portal'}
                                </MKTypography> */}
                                {/* <MKTypography sx={{ my:2}} variant={'h5'} color={'light'}>
                                    {'Admin Portal'}
                                </MKTypography> */}
                                <LoginLottie/>
                                {/*<img loading={'lazy'} src={'/static/login.svg'} alt={'Login'}/>*/}
                                <MKTypography variant={'body2'} color={'light'}>
                                    Copyright { '\u00a9'} {new Date().getFullYear()}
                                </MKTypography>
                            </MKBox>

                            <MKBox sx={{ flex: 1, p:2}}>
                                <MKBox
                                    sx={{
                                        alignItems: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        mb:2,
                                    }}
                                >
                                    <NextLink href="/" passHref>
                                        <a>
                                            <Logo
                                                sx={{
                                                    height: 40,
                                                    width: 40,
                                                }}
                                            />
                                        </a>
                                    </NextLink>
                                    {/* <MKTypography variant="h5" sx={{mt:2}}>{'Welcome to NHIF Admin portal.'}</MKTypography> */}
                                    <MKTypography sx={{ mt: 2 }} variant="body2">
                                        {'Login as a sponsor...'}
                                    </MKTypography>
                                </MKBox>
                                <MKBox
                                    sx={{
                                        flexGrow: 1,
                                        mt: 3,
                                        mb:2,
                                    }}
                                >
                                    <LoginForm/>
                                </MKBox>
                            </MKBox>


                        </MKBox>
                    </Card>
                </Container>
            </MKBox>
        </>
    )
}
LoginPage.getLayout = (page) => <GuestGuard>{page}</GuestGuard>;
export default LoginPage;