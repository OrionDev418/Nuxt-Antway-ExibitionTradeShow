export default function (ctx) {
  const {
    isMobile,
    isDesktop,
    redirect,
    route
  } = ctx;
  if (isDesktop){
    const redirect_url = process.env.WWW_URL + route.fullPath
    redirect(redirect_url)
  } 
}
