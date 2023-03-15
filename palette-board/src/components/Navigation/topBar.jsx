import React from 'react';
import './topBar.scss';
function TopBar() {
  return (
    <header>
      <h1>Palette Board</h1>
      <nav>
        <span>테마</span>
        <span>설정</span>
        <span>로그인</span>
      </nav>
    </header>
  );
}

export default TopBar;