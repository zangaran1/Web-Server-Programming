/* B"H
*/

import Link from 'next/link'

export default function Nav() {
    return (
        <nav class="navbar is-primary">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="22" height="22" />
            
          </a>
          <div class="navbar-burger"  >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" >
          <div class="navbar-start">

            <Link href="/" class="navbar-item">Home</Link>
            <Link href="/about" class="navbar-item">About</Link>
            <Link href="/products" class="navbar-item">Products</Link>
            <Link href="/storeLocations" class="navbar-item">Locations</Link>
          </div>
        </div>
        </div>
    </nav>
    )
}
