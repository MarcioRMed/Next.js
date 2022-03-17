
import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: { 
    signIn: '/',
    error: '/',
  }
})

// middleware intercepta as rotas para ver se usuario esta logado ou nao