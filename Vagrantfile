Vagrant.configure("2") do |config|
    
    config.vm.define "haproxy" do |haproxy|

      haproxy.vm.box = "centos/7"

      haproxy.vm.network "private_network", ip: "192.168.33.10"
      haproxy.vm.hostname = "haproxy"

      haproxy.vm.provider "virtualbox" do |vb|
         vb.gui = false
         vb.memory = "2048"
      end
end
end



