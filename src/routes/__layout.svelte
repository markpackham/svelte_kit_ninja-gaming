<script>
    import Title from '$lib/title.svelte'
    import '../styles/global.css'
</script>
  
  <header>
    <Title title="Ninja Gaming Guides" />
  </header>
  <main>
    <!-- relevant page component gets inserted in between slot tags -->
    <slot></slot>
  </main>
  <footer>
    <p>Copyright 2022 Ninja Gaming Guides</p>
  </footer>
  
  <style>
    header {
      display: flex;
      justify-content: center;
    }
    main {
      max-width: 60rem;
      margin: 1.25rem auto;
    }
    footer {
      text-align: center;
    }
  </style>