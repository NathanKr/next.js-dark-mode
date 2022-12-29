<h2>Motivation</h2>
Use also dark mode in my next.js

<h2>Installation</h2>
 It seems that next-themes is the way

 ```
 npm i next-themes
 ```

<h2>Code - _app.tsx</h2>

```typescript

 <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>

```

<h2>Code - index.tsx</h2>
mounted is used due to hydration problem - check 'Avoid Hydration Mismatch' <a href='https://www.npmjs.com/package/next-themes'>here</a>

```typescript
export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true),[])

  if(!mounted){
    return null;
  }

  return (
    <>
      <main>
        <div className={styles.description}>
          <button onClick={() => setTheme('light')}>set light</button>
          <button onClick={() => setTheme('dark')}>set dark</button>
          <p>theme : ${theme}</p>
        </div>
      </main>
    </>
  )
}
```

 <h2>styling - globals.css</h2>

 ```css
:root {
  /* Your default theme */
  --background: white;
  --foreground: black;
}

[data-theme='dark'] {
  --background: black;
  --foreground: white;
}
 ```

<h2>Open issues</h2>
<ul>
<li>understand better the css</li>
<li>do i need mounted on every page</li>
</ul>
