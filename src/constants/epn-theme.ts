// Tema visual EPN. Todos los estilos de la app deben leer de este archivo.
// IMPORTANTE: los colores son una aproximación. Usa el cuentagotas sobre el
// logo oficial de la EPN (epn.edu.ec) y reemplaza estos valores por los reales.

export const EPN = {
  colors: {
    primary: '#0B2E59',     // azul oscuro institucional (VERIFICAR con el logo)
    primaryDark: '#071F3D', // variante más oscura para barras o presionado
    accent: '#C8102E',      // rojo institucional (VERIFICAR con el logo)
    background: '#F5F7FA',  // fondo de pantallas
    surface: '#FFFFFF',     // tarjetas, modales
    text: '#1F2933',        // texto principal
    textMuted: '#52606D',   // texto secundario
    border: '#CBD2D9',
    onPrimary: '#FFFFFF',   // texto sobre primary/accent
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  radius: { sm: 6, md: 10, lg: 16, round: 999 },
  font: { caption: 13, body: 16, subtitle: 18, title: 24, display: 30 },
} as const;