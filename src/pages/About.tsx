import { Badge, BookOpen, Play } from "lucide-react"

const AboutPage = () => {
    return (
        <>
            <section className="py-20 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">🧠 Explore the Mind & Soul</Badge>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Master{" "}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Philosophy
                        </span>{" "}
                        &{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Psychology
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Dive deep into the human mind and explore life's biggest questions. Join thousands of students on a journey
                        of intellectual discovery and personal growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6"
                        >
                            <Play className="w-5 h-5 mr-2" />
                            Start Learning Today
                        </button>
                        <button className="text-lg px-8 py-6 border-2 bg-transparent">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Browse Courses
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">15K+</div>
                            <div className="text-gray-600">Active Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                            <div className="text-gray-600">Expert Courses</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                            <div className="text-gray-600">PhD Instructors</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                            <div className="text-gray-600">Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage