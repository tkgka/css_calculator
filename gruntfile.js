module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                //난독화 대상 코드의 경로 및 이름
                src: 'calculator.js', 
                //난독화된 코드가 저장될 경로 및 이름
                dest: 'build/calculator.min.js' 
            }
        },

        watch: {
            scripts: {
                files: ['calculator.js'],
                tasks: ['uglify']
            }
        }

    });

    //로딩
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //실행작업
    grunt.registerTask('default', ['uglify','watch']);
}