# Design System - Zippi

Guia completo de componentes, cores e tipografia da Zippi.

## 📊 Visualizar Design System

Para ver o design system interativo:

```bash
npm run dev
# Depois acesse: http://localhost:3000/zippi/design-system.html
```

## 🎨 Cores

| Nome | Hex | Variável CSS |
|------|-----|-------------|
| Primary Orange | #FFA500 | `--orange` |
| Dark Orange | #FF9500 | `--orange-dark` |
| Light Orange | #FFB700 | `--orange-light` |
| Background | #FFFCFB | `--bg` |
| White | #FFFFFF | `--white` |
| Dark Text | #333333 | `--dark` |
| Gray | #999999 | `--gray` |
| Light Gray | #E8E8E8 | `--gray-light` |
| Border | #e0e0e0 | `--border` |
| Success | #7fb800 | `--success` |
| Danger | #E85D5D | `--danger` |

## 📝 Tipografia

### Escalas de Fonte

- **H1**: 2rem (32px) - Bold
- **H2**: 1.5rem (24px) - Bold
- **H3**: 1.125rem (18px) - Medium
- **Body**: 1rem (16px) - Regular
- **Small**: 0.875rem (14px) - Regular
- **Caption**: 0.75rem (12px) - Regular

### Família de Fonte

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

## 🧩 Componentes

### Botões

#### Primary Button
```html
<button class="btn btn-primary">Fazer nova venda</button>
```

#### Secondary Button
```html
<button class="btn btn-secondary">Colar</button>
```

#### Icon Button
```html
<button class="btn btn-icon">
  <svg>...</svg>
</button>
```

### Inputs

#### Text Input
```html
<input type="text" class="input" placeholder="Digite algo...">
```

#### Input com Prefix (Pix)
```html
<div class="input-group">
  <span class="input-prefix">|</span>
  <input type="text" class="input" placeholder="Chave Pix">
</div>
```

#### Number Stepper
```html
<div class="stepper">
  <button class="stepper-btn">−</button>
  <span class="stepper-value">12</span>
  <button class="stepper-btn">+</button>
</div>
```

### Cards

#### Card Básico
```html
<div class="card">
  <h3>Resumo de vendas</h3>
  <div class="card-row">
    <div>
      <p class="label">Lucro bruto</p>
      <p class="amount">R$ 620,92</p>
    </div>
    <div>
      <p class="label">Lucro líquido</p>
      <p class="amount">R$ 560,00</p>
    </div>
  </div>
</div>
```

#### Alert/Warning Card
```html
<div class="card alert-card">
  <p>A conta vinculada precisa ser da sua titularidade</p>
  <button class="btn-help">?</button>
</div>
```

### Badges

#### Status Badges
```html
<span class="badge badge-success">Aprovada</span>
<span class="badge badge-danger">Cancelada</span>
<span class="badge badge-pending">Pendente</span>
```

### Navigation

#### Bottom Navigation
```html
<nav class="bottom-nav">
  <button class="nav-item">
    <span class="nav-icon">🏠</span>
    <span class="nav-label">Início</span>
  </button>
  <button class="nav-item active">
    <span class="nav-icon">💰</span>
    <span class="nav-label">Vendas</span>
  </button>
</nav>
```

## 🚀 Como Usar

### Importar no seu HTML

```html
<link rel="stylesheet" href="design-system.css">
```

### Usar Variáveis CSS

```css
/* Em seus estilos customizados */
.meu-componente {
  background-color: var(--orange);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-bold);
}
```

## 📦 Variáveis CSS Disponíveis

### Spacing
- `--spacing-xs`: 0.25rem
- `--spacing-sm`: 0.5rem
- `--spacing-md`: 1rem
- `--spacing-lg`: 1.5rem
- `--spacing-xl`: 2rem
- `--spacing-2xl`: 2.5rem

### Border Radius
- `--radius-sm`: 0.5rem
- `--radius-md`: 1rem
- `--radius-lg`: 1.5rem
- `--radius-full`: 9999px

### Shadows
- `--shadow-sm`: 0 2px 4px rgba(0, 0, 0, 0.05)
- `--shadow-md`: 0 4px 8px rgba(0, 0, 0, 0.1)
- `--shadow-lg`: 0 8px 16px rgba(0, 0, 0, 0.15)

### Typography
- `--font-weight-regular`: 400
- `--font-weight-medium`: 500
- `--font-weight-bold`: 600

## 📱 Responsividade

Todos os componentes são responsivos e se adaptam a diferentes tamanhos de tela:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Layout flexível
- **Mobile**: Single column

## 🎯 Boas Práticas

1. **Use variáveis CSS** em vez de valores hardcoded
2. **Sempre use classes do design system** para manter consistência
3. **Respeite o espaçamento** definido nas variáveis
4. **Mantenha acessibilidade** com contrastes e labels adequados
5. **Teste responsividade** em diferentes dispositivos

## 📞 Próximos Passos

- [ ] Adicionar mais componentes (toast, modal, dropdown)
- [ ] Criar exemplos de páginas completas
- [ ] Documentar animações e transições
- [ ] Gerar Figma kit baseado no design system

---

**Última atualização**: 2026-08-05
**Versão**: 1.0.0
