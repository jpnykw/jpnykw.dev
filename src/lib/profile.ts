// プロフィールの定数。件数・構造が固定的なので Content Collections には載せない(正典§5)。
// 文言とリンクは旧サイト(git履歴の旧main)からサルベージした実データ。
// X のみ旧 twitter.com を現ドメインに更新している。
export const profile = {
  handle: 'jpnykw',
  name: 'Hirakawa Haruto',
  motto: 'an engineer who likes cats',
  sns: [
    { label: 'GitHub', href: 'https://github.com/jpnykw' },
    { label: 'X', href: 'https://x.com/jpnykw' },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCmpA3l3QF0VI4nvNVADXoyg',
    },
    { label: 'SoundCloud', href: 'https://soundcloud.com/jpnykw' },
  ],
} as const;
