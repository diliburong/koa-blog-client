<template>
    <div class="main-container">
        <div class="container animation-container">
            <div class="row">

                <div class="column">
                    <div class="person-logo">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMDlhOTMzMy01MjYxLWY3NDYtYTgwMC05ODY0ODhlZTQ0NjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjlEQzc5ODk2MjEyMTFFNkI1RDU4RTU5NkUxNzlCNjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjlEQzc5ODg2MjEyMTFFNkI1RDU4RTU5NkUxNzlCNjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmQyNjllNTktNjQ5Mi1mZTQ0LTliN2MtNGIwYWVlOWVlYjZlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2EzODI4ZmUtZTA5Yi0xMWU1LWI2OGQtYWMxYWQxY2FmNjEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+r1Z3kwAABN9JREFUeNrMmmuIVVUUx/ccR0fLrCzExogsn6QVvYiupmVBjWbiB0OysvxQWaTT0+qTECRUaoikRTSYRpMVZQ/wkdhrCs1qxKlm0tJKBnpNWVpTM03/xfnfPF2896y1z7nnuuCHMO697/7vfffaa619q3K5nEvJeoHzwARwBhgJakF/cDz4nfwIWkkTeAf8lsYEqhP2D8AVYBaoA8eWaNufDAZjIn/vAm+D1eClJMICz359wE3gC/AGmBkjJG5BJ4FnwD6wCAzKSozsQAt4Ggx36dox4D7wNVjARSuLmONAI3dimCuvHQUeBp+Cs9MWcy74GMxw2dpo8AGYm5aYK3lAh7rKWF+wHCyLm2+cmGvAq+BoV3m7nee0ykfMpWAV6O2OHJvNs2S6Z+TCe9nqTQqskxdjO9gP+oETwQgwMMG44u32gic0YvrRa/ncGzLxNeAVsBX8XWKx5LK9js7FaovBh+CTuK/ZQ+AsDxG3gFPBPeD9EkIcd+xxhj8T6bGsTuE5/ltUzJngDuPADWAUWAn+8lhl8ZQ5ut8/Df1GceGKillqiNe6wa3gRp6JJNbDM3Ahd1lrC6KhT1SMRLuXGD5cPMuKlL1VM7iYMZo2Uqg/nJg7DR96L6PcctguMBn8oWx/G2O6/8QM4QAaexM8Vub7pNmwuCJkelTMDCZXcXaQB7UngwtyJZM3jV0fFXOV4QP2ZnTby4Ldr2w7XnYooK++SNHhH3q7LE1S6m2KdhJyjQt4t9QoOmwB31QgHtM6mvEBQwuNrfeczCC6fd+sdIOy3ViLmCbjJKoY4e7jrraBTQw2LSZ1hg5Fu6Ei5gTloF8aJzGPN3Q0opDCxfMeu9Oq+QaImAHKAb83TuDmIn+fxDTAYj8p2gwICiPPItblcbcMLvF/JxnHOqhoUyNiDigaVnskajtKLEyLRwkqzg6IGG0FsdY4gQeL5DSPurBEa7Ehijb7Rcx3ygHHGCfwHricF18Hvdl88IBxnN5Kt76nmq5PGzK87pF4TUh4aV6gPNdtgUHM1RWqyGg/tyUvRuP6RjK9zdL6sOih+hYEdLlvGdLULO2GGBeft1/A9nwK8IJy8CngsoyEyGW+UNl2ndQk8mLkYP+s7LjCEDUkscWGy/XZaHIm1cdVyo6ns3OvMgqRqs8cQ8y4ubCgIZeZtu41FTxZJkGSwi8ztF/ExPF/YiRUf8owiDwDvujCR6g0TFKGu11YqdQu0lfR5K2wCLjQcHbEprnwESqpUzgFvAYeMe72XdFvU6GYH5iHWEweoTbSiYwz9j3ZhWUruesmG/uudWGB/tDWFvkdQAN9vI/JxOSB6l3wGfiWkXI+hZZcRsqw8iI30fk9EssD7jm8X2LFSNlTngzGpnQeulzy3xxEcxuJ9z4q/I+gRAdZuV0pTSAtIXI+Zh5OiIvZYvFu8iC0xx0ZJkKu5W3vrGLEdruwQLijwkIkgazjVeB8xYi1U1BDhYTsZE4TGwxrPYnUCeRRaRbddxYmTmMJOF+bc1nd4hq61uXO78lPa7IL8t4pzxrqp0EfHy++XX5gcJoLC+kdKQnoZhSQY0TRbB0gSPDh4u3qGaZLcNhoDIXE5HVsE3eglgFsk++E0vD/nQwt1nJxRvOyHe4O/RKwhpHtrywzSdj+uQt/tdSZ1nfzXwEGANF+8TFphuEEAAAAAElFTkSuQmCC" alt="" srcset="">
                        <h5>I am yifan</h5>
                    </div>
                    <p class="about-description">
                        Hi, I am yifan, Web developer from michigan, 
                        US. I am passionate about design, development and interaction. I really love what I do.
                    </p>
                    <div class="btn-group-vertical">
                        <button class="button-vertical button button-outline">About</button>
                        <button class="button-vertical button button-outline">Contact</button>
                        <button class="button-vertical button button-outline">Work</button>


                    </div> 
                </div>
                
            </div>

        </div>
    
    </div>
    
</template>

<script>
// function setState(store) {}

export default {
    name: 'about',
    metaInfo: {
        title: 'about',
        titleTemplate: '%s - Stutter',
    },
    async asyncData({store, route}) {
        // setState(store);
    }
};
</script>

<style lang="stylus" scoped>
    .main-container
        padding-top: 5rem;
    .person-logo
        padding-top: 5rem;
    p
        color: #606c76;

</style>
