export type NavChild = { href: string; label: string };

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const menuItems: NavItem[] = [
  { href: "/", label: "Ana Sayfa" },
  {
    href: "/kurumsal",
    label: "Kurumsal",
    children: [
      { href: "/kurumsal/hakkimizda", label: "Hakkımızda" },
      { href: "/kurumsal/vizyon-misyon", label: "Vizyon - Misyon" },
      { href: "/kurumsal/kalite", label: "Kalite Politikamız" },
      { href: "/kurumsal/hizmet-standartlari", label: "Hizmet Standartları" },
      { href: "/kurumsal/esnek-mesai-cizelgesi", label: "Esnek Mesai Saatleri" },
      { href: "/kurumsal/foto-galeri", label: "Fotoğraf Galeri" },
    ],
  },
  { href: "/kadromuz", label: "Kadromuz" },
  {
    href: "/aile-hekimligi",
    label: "Aile Hekimliği",
    children: [
      { href: "/aile-hekimligi/aile-hekimligi-kanunu", label: "Aile Hekimliği Kanunu" },
      { href: "/aile-hekimligi/aile-hekimi-tanimi", label: "Aile Hekiminin Tanımı" },
      { href: "/aile-hekimligi/aile-hekimligi-sss", label: "Sık Sorulan Sorular" },
      { href: "/aile-hekimligi/aile-sagligi-elemani", label: "Aile Sağlığı Elemanı" },
      { href: "/aile-hekimligi/aile-sagligi-merkezi", label: "Aile Sağlığı Merkezi" },
    ],
  },
  {
    href: "/hizmetler",
    label: "Hizmetler",
    children: [
      { href: "/hizmetler/gebe-izlem", label: "Gebe İzlemleri" },
      { href: "/hizmetler/bebek-izlem", label: "Bebek İzlemleri" },
      { href: "/hizmetler/saglik-raporu", label: "Verilen Sağlık Raporları" },
      { href: "/hizmetler/enjeksiyon-pansuman", label: "Enjeksiyon - Pansuman" },
      { href: "/hizmetler/bebek-asi-takvimi", label: "Bebek Aşı Takvimi" },
      {
        href: "/hizmetler/vucut-kitle-indeksi-hesaplama",
        label: "Vücut Kitle İndeksi Hesaplama",
      },
    ],
  },
  {
    href: "/saglik-bilgi",
    label: "Sağlık Bilgi",
    children: [
      { href: "/saglik-bilgi/asi-bilgi", label: "Aşı Genel Bilgiler" },
      { href: "/saglik-bilgi/genel-saglik-bilgileri", label: "Genel Sağlık Bilgileri" },
      { href: "/saglik-bilgi/onemli-tel-hat", label: "Önemli Telefon Hatları" },
    ],
  },
  { href: "/iletisim", label: "İletişim" },
];

export function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
