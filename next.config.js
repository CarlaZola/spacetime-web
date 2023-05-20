/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

// next não carrega imagens externas de qualquer endereço, é necessário passar quais os domínios serão utilizados para obter as imagens

module.exports = nextConfig
