export interface ThemeType {
  colors: {
    background: string
    text: string
    subtitle: string
    primary: string
    card: string
    border: string
  }
  spacing: { sm: number; md: number; lg: number; xl: number; xxl: number }
  typography: { title: number; subtitle: number; label: number; input: number; button: number }
  radius: { md: number }
}

export const theme: ThemeType = {
  colors: {
    background: '#fff',
    text: '#000',
    subtitle: '#666',
    primary: '#007bff',
    card: '#f8f8f8',
    border: '#ddd',
  },
  spacing: { sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 },
  typography: { title: 24, subtitle: 16, label: 14, input: 16, button: 16 },
  radius: { md: 10 },
}

export default theme