---
layout: default
title: Projekte & Interessen
description: Projekte, Hyperfokus-Themen und was mich antreibt
permalink: /projekte/
---

<article class="page">
  <header class="page__header">
    <h1 class="page__title">Projekte & Interessen</h1>
    <p class="page__subtitle">Was mich beschäftigt — mit der Möglichkeit, tiefer einzutauchen.</p>
  </header>

  <div class="page__body">

    <p>Ich neige dazu, Dinge nicht nur oberflächlich zu erkunden. Was mich interessiert, interessiert mich <em>richtig</em>. Hier sind die Themen, denen ich gerade Zeit und Energie widme:</p>

    <div class="interest-grid">

      {% assign hyperfocus_pages = site.hyperfocus | sort: 'order' %}
      {% for item in hyperfocus_pages %}
      <a href="{{ item.url | relative_url }}" class="interest-card">
        <span class="interest-card__emoji">{{ item.emoji | default: '🔍' }}</span>
        <span class="interest-card__title">{{ item.title }}</span>
        <p class="interest-card__desc">{{ item.description }}</p>
        <span class="interest-card__arrow">Mehr erfahren →</span>
      </a>
      {% else %}
      <!-- Platzhalter bis Hyperfokus-Seiten erstellt werden -->
      <a href="#" class="interest-card">
        <span class="interest-card__emoji">📷</span>
        <span class="interest-card__title">Analoge Fotografie</span>
        <p class="interest-card__desc">Film, Darkroom, die Entschleunigung des Sehens.</p>
        <span class="interest-card__arrow">Mehr erfahren →</span>
      </a>
      <a href="#" class="interest-card">
        <span class="interest-card__emoji">🎛</span>
        <span class="interest-card__title">Audio & Modular Synthesis</span>
        <p class="interest-card__desc">Klang als Material — vom Patch-Kabel zum fertigen Track.</p>
        <span class="interest-card__arrow">Mehr erfahren →</span>
      </a>
      <a href="#" class="interest-card">
        <span class="interest-card__emoji">🧠</span>
        <span class="interest-card__title">PKM & Second Brain</span>
        <p class="interest-card__desc">Wie man Wissen so speichert, dass man es wirklich findet.</p>
        <span class="interest-card__arrow">Mehr erfahren →</span>
      </a>
      <a href="#" class="interest-card">
        <span class="interest-card__emoji">🛠</span>
        <span class="interest-card__title">Open Source Projekte</span>
        <p class="interest-card__desc">Was ich baue, warum — und was ich dabei lerne.</p>
        <span class="interest-card__arrow">Mehr erfahren →</span>
      </a>
      {% endfor %}
    </div>

  </div>
</article>
