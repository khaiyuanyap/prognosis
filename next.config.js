module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://khaichuen.pythonanywhere.com/:path*"
      }
    ]
  }
}
