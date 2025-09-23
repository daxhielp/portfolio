import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
 

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'daxperugorria@gmail.com',
      link: 'mailto:daxperugorria@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      info: '+1 (469) 673-9154',
      link: 'tel:+14696739154'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      info: 'Austin, TX',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="flex flex-row sm:flex-row gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{item.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white h-fit w-8/12">
              <h4 className="text-xl font-bold mb-4">Let's Connect!</h4>
              <p className="mb-4">
                I'd love to get in contact with you. Whether you have a project idea, collaboration opportunity, or just want to say hello, feel free to reach out!
              </p>
              <ul className="space-y-2 text-sm">
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;