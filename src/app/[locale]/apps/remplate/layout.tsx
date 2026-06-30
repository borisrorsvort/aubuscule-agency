import { getTranslations } from 'next-intl/server'
import { AppSubNav } from '@/components/apps/AppSubNav'

export default async function RemplateLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'remplate.subnav' })

  const navItems = [
    { href: '/apps/remplate', label: t('overview') },
    { href: '/apps/remplate/templates', label: t('templates') },
    { href: '/apps/remplate/faq', label: t('faq') },
  ]

  return (
    <main id="main-content">
      <AppSubNav items={navItems} />
      <div className="wrap">
        {children}
      </div>
    </main>
  )
}
