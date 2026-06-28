export const metadata = {
  title: 'Manual Treatment Clinic',
  description: 'Expert Manual Therapy & Osteopathy',
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