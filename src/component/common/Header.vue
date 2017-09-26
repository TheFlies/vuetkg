<template>
  <header id="header" class="alt">
    <h1><a href="/">TKG</a> by The Flies</h1>
    <nav id="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li>
          <a href="#" class="icon fa-angle-down">Layouts</a>
          <ul>
            <li><a href="/generic">Generic</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/elements">Elements</a></li>
            <li>
              <a href="#">Submenu</a>
              <ul>
                <li><a href="#">Option One</a></li>
                <li><a href="#">Option Two</a></li>
                <li><a href="#">Option Three</a></li>
                <li><a href="#">Option Four</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="/login" >Login</a> or <a href="/register" class="button">Sign Up</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'tkg-header'
}
</script>
