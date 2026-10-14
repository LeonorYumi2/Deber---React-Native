---
name: epn-design
description: Diseño visual basado en la imagen institucional de la Escuela Politécnica Nacional (EPN). Úsala siempre que se cree, rediseñe o estilice una pantalla, componente, botón, modal, encabezado, ícono o splash de la app React Native / Expo (StickerSmash), o cuando el usuario mencione EPN, colores institucionales, tema, estilo o diseño de la app.
---

# Skill: Diseño visual EPN (React Native + Expo)

Aplica la imagen institucional de la Escuela Politécnica Nacional a la app
StickerSmash. Esta skill cambia SOLO la presentación: no modifiques la
lógica, los estados ni los permisos del tutorial.

## 1. Fuente única de verdad
Todos los colores, espaciados, radios y tamaños de texto salen de
`src/constants/epn-theme.ts`. Está prohibido escribir colores hexadecimales
sueltos dentro de los componentes.

```ts
import { EPN } from '@/constants/epn-theme';
// uso: backgroundColor: EPN.colors.primary
```

## 2. Identidad
- Carácter: institucional, sobrio, académico y confiable.
- Color primario: azul oscuro EPN. Acento: rojo EPN, usado con moderación
  (un solo elemento destacado por pantalla, por ejemplo el botón principal).
- Fondos claros (blanco o gris muy claro) con texto gris oscuro.
- Idioma de todos los textos de la interfaz: español formal.

## 3. Reglas por componente
- **Encabezado / barra superior:** fondo `primary`, título blanco en negrita,
  texto "EPN" o nombre de la app. Barra de estado en modo claro sobre fondo azul.
- **Botón principal (`Button`):** fondo `primary`, texto blanco, radio
  `EPN.radius.md`, alto mínimo 48, sin sombras exageradas.
- **Botón secundario:** fondo transparente, borde de 2 px `primary`, texto `primary`.
- **CircleButton / IconButton:** fondo `accent` o `primary`, ícono blanco.
- **Modal (`EmojiPicker`):** barra de título en `primary` con texto blanco,
  cuerpo en `surface`, esquinas superiores redondeadas.
- **Pantalla (`app/`):** fondo `background`, márgenes `EPN.spacing.md`.
- **Textos:** títulos `EPN.font.title`, cuerpo `EPN.font.body` (mínimo 16).
- **Splash e ícono (`app.json`):** fondo del splash en el azul primario;
  ícono con el escudo/logo de la EPN sobre fondo sólido, sin deformarlo.

## 4. Accesibilidad (obligatorio)
- Contraste suficiente: texto blanco sobre `primary` y `accent`; texto oscuro
  sobre fondos claros.
- Áreas táctiles de al menos 44 x 44.
- Todos los botones con `accessibilityLabel` en español.

## 5. Ejemplo de referencia
```tsx
import { Pressable, Text, StyleSheet } from 'react-native';
import { EPN } from '@/constants/epn-theme';

export default function Button({ label, onPress }: { label: string; onPress?: () => void }) {
  return (
    <Pressable
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && { opacity: 0.85 }]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: EPN.colors.primary,
    borderRadius: EPN.radius.md,
    minHeight: 48,
    paddingHorizontal: EPN.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { color: EPN.colors.onPrimary, fontSize: EPN.font.body, fontWeight: '700' },
});
```

## 6. Pasos al aplicar la skill
1. Confirmar que existe `constants/epn-theme.ts`; si no, crearlo.
2. Reemplazar colores y tamaños sueltos por tokens de `EPN`.
3. Rediseñar los componentes en el orden: Button, CircleButton, IconButton,
   EmojiPicker, pantalla principal, encabezado.
4. Actualizar textos de la interfaz a español.
5. Revisar `app.json` (splash, ícono, color de fondo).
6. Verificar que la app sigue funcionando igual (galería, stickers, gestos, guardar).