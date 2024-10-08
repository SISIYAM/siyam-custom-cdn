# siyam-custom-cdn

# Components

- `Card`

```html
<div class="card-ui">
  <div class="card-header-ui">
    <img
      class="card-image"
      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
      alt="nextui logo"
    />
    <div class="card-info">
      <p class="card-title-ui">Card Title</p>
      <p class="card-subtitle-ui">Card</p>
    </div>
  </div>

  <div class="card-body-ui">
    <p>Make beautiful websites regardless of your design experience.</p>
    <div class="responsive-container">
      <img
        src="https://imgs.search.brave.com/hv9ItpjUTKyuuCMxqud2zm_coNN5PAZaTSNcfuJA6-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzL3dtLzIw/MjQvMDcvcm9iZXJ0/LWRvd25leS1qci1z/LW1jdS1yZXR1cm4t/cmVwb3J0LXN1Z2dl/c3RzLWEtaHVnZS1k/b2N0b3ItZG9vbS10/d2lzdC5qcGc"
        alt="Responsive"
        class="responsive-image"
      />
    </div>
  </div>

  <div class="card-footer-ui">Card footer</div>
</div>
```

- `Container center`

```html
<div class="container-center"></div>
```

- `Image Responsive`

```html
<div class="responsive-container">
  <img
    src="https://imgs.search.brave.com/hv9ItpjUTKyuuCMxqud2zm_coNN5PAZaTSNcfuJA6-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzL3dtLzIw/MjQvMDcvcm9iZXJ0/LWRvd25leS1qci1z/LW1jdS1yZXR1cm4t/cmVwb3J0LXN1Z2dl/c3RzLWEtaHVnZS1k/b2N0b3ItZG9vbS10/d2lzdC5qcGc"
    alt="Responsive"
    class="responsive-image"
  />
</div>
```

- `Checkbox`

```html
<label class="checkbox default check-circle">
  <input type="checkbox" checked />
  <span class="checkmark"></span>
  Default
</label>
<label class="checkbox primary check-semi">
  <input type="checkbox" checked />
  <span class="checkmark"></span>
  Primary
</label>
<label class="checkbox secondary">
  <input type="checkbox" checked />
  <span class="checkmark"></span>
  Secondary
</label>
<label class="checkbox success check-circle">
  <input type="checkbox" checked />
  <span class="checkmark"></span>
  Success
</label>
<label class="checkbox warning check-semi">
  <input type="checkbox" checked />
  <span class="checkmark"></span>
  Warning
</label>
<label class="checkbox danger">
  <input type="checkbox" checked />
  <span class="checkmark"></span>
  Danger
</label>
```

- `Checkbox Group`

```html
<div class="checkbox-group">
  <label class="checkbox default check-circle">
    <input type="checkbox" checked />
    <span class="checkmark"></span>
    Default
  </label>
  <label class="checkbox primary check-semi">
    <input type="checkbox" checked />
    <span class="checkmark"></span>
    Primary
  </label>
  <label class="checkbox secondary">
    <input type="checkbox" checked />
    <span class="checkmark"></span>
    Secondary
  </label>
  <label class="checkbox success check-circle">
    <input type="checkbox" checked />
    <span class="checkmark"></span>
    Success
  </label>
  <label class="checkbox warning check-semi">
    <input type="checkbox" checked />
    <span class="checkmark"></span>
    Warning
  </label>
  <label class="checkbox danger">
    <input type="checkbox" checked />
    <span class="checkmark"></span>
    Danger
  </label>
</div>
```

- `Progress Group`

```html
<div class="progress-group">
  <div class="progress-circle default" aria-label="Loading..."></div>
  <div class="progress-circle primary" aria-label="Loading..."></div>
  <div class="progress-circle secondary" aria-label="Loading..."></div>
  <div class="progress-circle success" aria-label="Loading..."></div>
  <div class="progress-circle warning" aria-label="Loading..."></div>
  <div class="progress-circle danger" aria-label="Loading..."></div>
</div>
```

- `Switch`

```html
<div class="container-switch">
  <label class="switch-label">
    <input type="checkbox" class="switch-input" />
    <span class="switch-slider"></span>
  </label>
  <span class="btn-defalut">Toggle</span>
</div>
```

- `Modal`

```html
<button class="open-modal-md-btn" onclick="openModal()">Open Modal-md</button>

<div id="modal-md-ui" class="modal-md-ui">
  <div class="modal-md-ui-content">
    <div class="modal-md-ui-header">Modal Title</div>
    <div class="divider"></div>
    <div class="modal-md-ui-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
        risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
        risus, sed porttitor quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
        risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
        risus, sed porttitor quam.
      </p>
      <p>
        Magna exercitation reprehenderit magna aute tempor cupidatat consequat
        elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
        quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
        eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
        pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
      </p>
    </div>
    <div class="divider"></div>
    <div class="modal-md-ui-footer">
      <button class="modal-md-close-btn" onclick="closeModal()">Close</button>
      <button class="modal-md-action-btn" onclick="closeModal()">Action</button>
    </div>
  </div>
</div>
```
