$(function() { 
    ko.applyBindings(LZ.new(LZ.Troubleshooter, {
      resources: [{
        name: 'wistia',
        images: [
          {url: 'https://fast.wistia.net/bandwidth_check.png'},
          {url: 'https://embed-ssl.wistia.com/deliveries/f37fc8935b17ed1114210ef9f13d2531f769bd83.jpg?image_resize=100'},
          {url: 'https://embedwistia-a.akamaihd.net/bandwidth_check.png'},
        ]
      }, {
        name: 'filestack',
        images: [
          {url: 'https://www.filepicker.io/api/file/WZlsT9DkQTSbBbfn6WIP'},
          {url: 'https://cdn.filestackcontent.com/WZlsT9DkQTSbBbfn6WIP'},
          {url: 'https://www.filestackapi.com/api/file/WZlsT9DkQTSbBbfn6WIP'},
          {url: 'https://process.filestackapi.com/output=format:png/KDlswo4WTx4DSyRTqNbw'},
        ],
      }, {
        name: 'mathjax',
        images: [
          {url: 'https://cdn.mathjax.org/mathjax/latest/fonts/HTML-CSS/TeX/png/Math/Italic/050/0056.png'},
        ],
      }, {
        name: 'cloudfront',
        images: [
          {url: 'https://d1teljsp1bwcfb.cloudfront.net/assets/v2/logo_mark-e3f73b9f5ff75bfa24d3a9ab908468cd8291dfa2e1c1baef37fcd68a45ed6c15.png'},
          {url: 'https://d1teljsp1bwcfb.cloudfront.net/assets/TF-logo-250-bb2785276471ebc50b7f513c0740b7386daddfc5a67260e7d972fee6748f6c83.png'},
        ]
      }],
    }), document.getElementById('troubleshooter'));
});
