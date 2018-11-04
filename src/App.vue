<template>
    <div id="app">
        <div id="header">
            <h1>2018 Congressional Candidate Explorer</h1>
        </div>
        <div id="alphaWrapper">
            <div id="contentwrapper">
                <div id="contentcolumn">
                    <div class="innertube">
                        <detail :selected="selected"></detail>
                    </div>
                </div>
                
            </div>
            <div id="leftcolumn">
                <div class="innertube">
                    <grid @candSelected="candSelected"></grid>
                </div>
            </div>   
        </div>
        
        <div id="footer">
            <h4>Gregory Prouty . Nov 2 2018 </h4>
        </div>
    </div>
</template>

<script>
    import Grid from './components/Grid';
    import Detail from './components/Detail';

    export default {
        name: 'app',
        data() {
            return {
                selected: null
            }
        },
        components: {
            Grid,
            Detail
        },
        methods: {
            candSelected(details) {
                this.selected = details;
            }
        }
    }
</script>

<style scoped>
    #app {
        margin-top: -10px;
        margin-left: -10px;
        margin-right: -10px;
        padding:0;
    }
    body {
        margin: 0;
        padding: 0;
    }
    #header {
        height: 100px;
        background-image: url("http://s3.amazonaws.com/wallpapers2/wallpapers/images/000/000/366/original/353.jpg?1487671563");
        background-position: bottom; 
    }

    #header h1 {
        margin-top: 0px;
        margin-left: 30px;
        color: white;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    #footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        background-color: #414751;
        color: white;
        text-align: center;
    }

    #alphaWrapper{
        margin: 20px;
        
    }
    #contentwrapper {
        float: left;
        width: 100%;
    }

    #contentcolumn {
        margin-left: 60%;
        max-width: 40%;
    }

    #leftcolumn {
        float: left;
        width: 60%;
        margin-left: -100%;
    }

    .innertube {
        margin: 10px;
        margin-top: 0;
    }

    @media (max-width: 600px) {
        #contentwrapper {
            float: none;
        }

        #leftcolumn {
            float: none;
            width: 100%;
            margin-left: 0;
        }

        #contentcolumn {
            margin-left: 0;
        }
    }
</style>