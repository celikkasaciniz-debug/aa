import { useState, useEffect } from "preact/hooks";
import {
  cartStore,
  customerStore,
  hasCustomer,
  getIkasOrderTotalItemCount,
  getDefaultSrc,
  getFormattedHeightSize,
  Router,
  createMediaSrcset,
  withRoutePrefix,
} from "@ikas/bp-storefront";
import { Props } from "./types";
import CartSidebar from "./components/CartSidebar";
import MobileMenu from "./components/MobileMenu";
import SearchModal from "./components/SearchModal";
import NavItem from "./components/NavItem";
import { cx } from "../../utils/cx";
import { buildTelHref, buildWhatsAppHref } from "../../utils/contact";
import {
  List1SVG,
  MagnifyingGlass1SVG,
  User1SVG,
  ShoppingBag1SVG,
  LockSVG,
  PhoneSVG,
  WhatsAppSVG,
} from "../../sub-components/icons";
export function Navbar(props: Props) {
  const {
    logo,
    navigationLinks,
    logoSizeDesktop: rawLogoSizeDesktop,
    logoSizeMobile: rawLogoSizeMobile,
    cartTitle = "My Cart",
    emptyCartText = "Your cart is empty",
    checkoutButtonText = "Proceed to Checkout",
    totalText = "Total",
    navigationLinkColor,
    coloredLinks,
    coloredLinkColor,
    registerButtonText = "Sign Up",
    loginButtonText = "Sign In",
    logoutButtonText = "Sign Out",
    freeShippingText = "Free shipping on orders over $150",
    emptyCartButtonText = "Start Shopping",
    searchPlaceholder = "What are you looking for?",
    searchingText = "Searching...",
    noResultsText = "No products found",
    resultCountText = "Result",
    addToCartText = "Add to Cart",
    addedToCartText = "Added to Cart",
    outOfStockText = "Sold Out",
    goToProductText = "View Product",
    viewAllText = "View All",
    viewCartButtonText = "View Cart",
    searchEmptyStateText = "Search for products...",
    searchProductList,
    hideAddToCartButton,
    imageAspectRatio,
    imageObjectFit,
    components,
    stickyEnabled,
    backgroundColor = "#ffffff",
    borderColor = "#e1e4e8",
    brandName,
    brandTagline,
    headerPhone,
    menuLabel = "Menüyü aç",
    searchLabel = "Ara",
    accountLabel = "Hesabım",
    cartLabel = "Sepetim",
    showAccount = false,
    showSearch = false,
    whatsappLabel = "WhatsApp'tan Sor",
    whatsappMessage = "Merhaba, çelik kasa hakkında bilgi almak istiyorum.",
  } = props;

  const telHref = buildTelHref(headerPhone);
  const waHref = buildWhatsAppHref(headerPhone, whatsappMessage);

  const logoSizeDesktop = getFormattedHeightSize(rawLogoSizeDesktop) || "60px";
  const logoSizeMobile = getFormattedHeightSize(rawLogoSizeMobile) || "48px";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const openCart = () => setCartOpen(true);
    window.addEventListener("ikas:open-cart-sidebar", openCart);
    return () => window.removeEventListener("ikas:open-cart-sidebar", openCart);
  }, []);

  const cart = cartStore.cart;
  const itemCount = cart ? getIkasOrderTotalItemCount(cart) : 0;
  const isLoggedIn = hasCustomer(customerStore);

  const links = navigationLinks?.links ?? [];
  const coloredLinksList = coloredLinks?.links ?? [];

  return (
    <div
      className={cx("kombos-navbar", stickyEnabled && "kombos-navbar--sticky")}
      style={{
        "--logo-h-desktop": logoSizeDesktop,
        "--logo-h-mobile": logoSizeMobile,
        backgroundColor,
        borderColor,
      }}
    >
      <div className="kombos-navbar__inner kombos-container ck-header">
        {/* Logo */}
        {logo && (
          <a
            className="kombos-navbar__logo ck-header__logo"
            href={withRoutePrefix("/")}
            onClick={(e) => {
              e.preventDefault();
              Router.navigateToPage("INDEX");
            }}
            style={{
              "--logo-h-desktop": logoSizeDesktop,
              "--logo-h-mobile": logoSizeMobile,
            }}
          >
            <img
              src={getDefaultSrc(logo)}
              srcSet={createMediaSrcset(logo)}
              sizes="200px"
              alt={logo?.altText || brandName || "Logo"}
              className="kombos-navbar__logo-img"
              width={200}
              height={60}
              fetchpriority="high"
              loading="eager"
            />
          </a>
        )}

        {/* Text wordmark — used until a logo image is uploaded */}
        {!logo && brandName && (
          <a
            className="ck-header__logo ck-wordmark"
            href={withRoutePrefix("/")}
            onClick={(e) => {
              e.preventDefault();
              Router.navigateToPage("INDEX");
            }}
          >
            <span className="ck-wordmark__mark" aria-hidden="true">
              <LockSVG />
            </span>
            <span className="ck-wordmark__text">
              <span className="ck-wordmark__name text-md-semibold lg:text-lg-semibold">{brandName}</span>
              {brandTagline && (
                <span className="ck-wordmark__tagline text-xs-medium">{brandTagline}</span>
              )}
            </span>
          </a>
        )}

        {/* Desktop Navigation */}
        <nav className="kombos-navbar__nav ck-header__nav" aria-label={menuLabel}>
          {links.map((link, i) => (
            <NavItem key={i} link={link} linkColor={navigationLinkColor} />
          ))}
          {coloredLinksList.map((link, i) => (
            <NavItem key={`cl-${i}`} link={link} linkColor={coloredLinkColor} />
          ))}
        </nav>

        {/* Actions */}
        <div className="ck-header__actions">
          {telHref && (
            <a className="ck-navbar-phone text-sm-semibold" href={telHref}>
              <PhoneSVG className="ck-navbar-phone__icon" />
              {headerPhone}
            </a>
          )}

          {waHref && (
            <a
              className="ck-header__wa text-sm-semibold"
              href={waHref}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppSVG className="ck-header__wa-icon" />
              {whatsappLabel}
            </a>
          )}

          {/* Mobile: one-tap call */}
          {telHref && (
            <a className="ck-header__icon ck-header__icon--call" href={telHref} aria-label={headerPhone}>
              <PhoneSVG />
            </a>
          )}

          {showSearch && (
            <a
              className="ck-header__icon"
              href={withRoutePrefix("/search")}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSearchOpen(true);
              }}
              aria-label={searchLabel}
            >
              <MagnifyingGlass1SVG />
            </a>
          )}

          {showAccount && (
            <a
              className="ck-header__icon"
              href={withRoutePrefix(isLoggedIn ? "/account" : "/account/login")}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                Router.navigateToPage(isLoggedIn ? "ACCOUNT" : "LOGIN");
              }}
              aria-label={accountLabel}
            >
              <User1SVG />
            </a>
          )}

          {/* Cart — kept small; needed for checkout */}
          <a
            className="ck-header__icon kombos-navbar__cart-trigger"
            href={withRoutePrefix("/cart")}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCartOpen(true);
            }}
            aria-label={cartLabel}
          >
            <ShoppingBag1SVG />
            {itemCount > 0 && <span className="kombos-navbar__badge">{itemCount}</span>}
          </a>

          {/* Hamburger — mobile/tablet only */}
          <button
            type="button"
            className="ck-header__icon ck-header__burger"
            onClick={() => setMobileMenuOpen(true)}
            aria-label={menuLabel}
          >
            <List1SVG />
          </button>
        </div>
      </div>

      {/* Cart Sidebar */}
      {cartOpen && (
        <CartSidebar
          cartTitle={cartTitle}
          emptyCartText={emptyCartText}
          checkoutButtonText={checkoutButtonText}
          viewCartButtonText={viewCartButtonText}
          totalText={totalText}
          freeShippingText={freeShippingText}
          emptyCartButtonText={emptyCartButtonText}
          imageAspectRatio={imageAspectRatio}
          imageObjectFit={imageObjectFit}
          onClose={() => setCartOpen(false)}
        />
      )}

      {/* Search Modal */}
      {searchOpen && (
        <SearchModal
          productList={searchProductList}
          logo={logo ?? undefined}
          logoSizeDesktop={logoSizeDesktop}
          logoSizeMobile={logoSizeMobile}
          searchPlaceholder={searchPlaceholder}
          searchingText={searchingText}
          noResultsText={noResultsText}
          resultCountText={resultCountText}
          addToCartText={addToCartText}
          addedToCartText={addedToCartText}
          outOfStockText={outOfStockText}
          goToProductText={goToProductText}
          viewAllText={viewAllText}
          emptyStateText={searchEmptyStateText}
          hideAddToCartButton={hideAddToCartButton}
          aspectRatio={imageAspectRatio}
          objectFit={imageObjectFit}
          onClose={() => setSearchOpen(false)}
          components={components}
          parentProps={props}
        />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu
          linkGroups={[
            { links, color: navigationLinkColor },
            ...(coloredLinksList.length > 0
              ? [{ links: coloredLinksList, color: coloredLinkColor }]
              : []),
          ]}
          registerButtonText={registerButtonText}
          loginButtonText={loginButtonText}
          logoutButtonText={logoutButtonText}
          onClose={() => setMobileMenuOpen(false)}
          onCartOpen={() => setCartOpen(true)}
          showAccount={showAccount}
          phone={headerPhone}
          phoneLabel={headerPhone ? `Hemen arayın · ${headerPhone}` : undefined}
        />
      )}
    </div>
  );
}

export default Navbar;

// rev 2026-09-29 header v2 + description typography
// rev 2026-09-29b header breakpoint
// rev 2026-09-30 logo size
