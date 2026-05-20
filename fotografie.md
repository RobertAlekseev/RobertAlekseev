---
layout: default
title: Fotografie
description: Eine Auswahl fotografischer Arbeiten von Robert Alekseev
permalink: /fotografie/
---

<article class="page" style="max-width: 1100px;">
  <header class="page__header">
    <h1 class="page__title">Fotografie</h1>
    <p class="gallery-intro">
      Momente, die es verdient haben, festgehalten zu werden.
      Analog und digital — immer mit Absicht.
    </p>
  </header>

  <div class="page__body">

    <div class="gallery-grid">
      <!--
        Bilder einfügen:
        <div class="gallery-item" data-src="/assets/img/foto-titel.jpg" data-caption="Bildunterschrift">
          <img src="/assets/img/foto-titel.jpg" alt="Bildunterschrift" loading="lazy">
        </div>

        Solange noch keine Bilder vorhanden sind, werden Platzhalter angezeigt.
      -->

      {% assign photos = site.static_files | where_exp: "f", "f.path contains '/assets/img/gallery/'" %}
      {% if photos.size > 0 %}
        {% for photo in photos %}
        <div class="gallery-item" data-src="{{ photo.path | relative_url }}">
          <img src="{{ photo.path | relative_url }}" alt="Fotografie" loading="lazy">
        </div>
        {% endfor %}
      {% else %}
        {% for i in (1..8) %}
        <div class="gallery-item">
          <div class="gallery-item__placeholder">Bild {{ i }}</div>
        </div>
        {% endfor %}
      {% endif %}
    </div>

  </div>
</article>

<div class="lightbox" id="lightbox">
  <button class="lightbox__close" aria-label="Schließen">✕</button>
  <img src="" alt="">
</div>
