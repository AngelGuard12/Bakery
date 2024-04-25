export const metadata = {
  title: 'Bakery Shop',
  description: 'Tienda Online de Pan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
