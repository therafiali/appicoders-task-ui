export type WhyChooseUsItem = {
  id: string
  title: string
  description: string
  icon: 'brain' | 'team' | 'creditCard'
  variant: 'left' | 'center' | 'right'
}

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 'focused-approach',
    title: 'Focused Business Approach',
    description:
      'We research, plan, and execute — qualities that make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
    icon: 'brain',
    variant: 'left',
  },
  {
    id: 'professional-team',
    title: 'Professional Team',
    description:
      'Our mobile development company has extremely professional and expert mobile app developers who specialize in 2D, 3D, and e-commerce apps for Android, iOS, and web app platforms.',
    icon: 'team',
    variant: 'center',
  },
  {
    id: 'flexible-payments',
    title: 'Flexible Payment Terms',
    description:
      'Get your apps developed with the most affordable price and, with our flexible payment terms, pay as your project progresses.',
    icon: 'creditCard',
    variant: 'right',
  },
]


