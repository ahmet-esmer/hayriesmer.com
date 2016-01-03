class MessageMailer < ActionMailer::Base


  default from: "Web Sitesinden <info@hayriesmer.com>"
  default to: "Hayri Esmer <hayriesmer@gmail.com>"

  def new_message(message)
    @message = message

    mail subject: "Message from #{message.name}"
  end


end
