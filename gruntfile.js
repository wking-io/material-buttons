module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			sass: {
				files: ['stylesheets/*.scss'],
				tasks: ['sass', 'cssmin']
			}
		},

		sass : {
			dist: {
				files: {
					'css/style.css': 'stylesheets/style.scss'
				}
			}
		},

		concat: {
			options: {
				separator: ";",
				stripBanners: true,
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			dist: {
				src: ['js/placeholder.js', 'js/placeholder2/js'],
				dest: 'js/main.min.js'
			}
		},

		uglify: {
			options: {
				manage: false
			},
			my_target: {
				files: {
					'js/main.min.js': ['js/main.js'],
					'js/modernizr.min.js': ['js/modernizr.js'],
					'js/jquery-2.1.1.min.js': ['js/jquery-2.1.1.js']
				}
			}
		},

		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src:['style.css', 'reset.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['watch']);
};